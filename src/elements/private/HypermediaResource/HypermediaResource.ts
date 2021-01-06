import { ElementContext, ElementError, ElementEvent, ElementResourceV8N, Resource } from './types';
import { StateMachine, interpret } from 'xstate';
import { isEqual, merge } from 'lodash-es';

import { PropertyDeclarations } from 'lit-element';
import { RequestEvent } from '../../../events/request';
import { Translatable } from '../../../mixins/translatable';
import { machine } from './machine';
import traverse from 'traverse';

function generalizeURL(value: string) {
  const url = new URL(value);
  url.search = '';
  url.hash = '';
  return url.toString();
}

export abstract class HypermediaResource<T extends Resource> extends Translatable {
  static get resourceV8N(): ElementResourceV8N<any> {
    return {};
  }

  static get properties(): PropertyDeclarations {
    return {
      resource: { attribute: false, noAccessor: true },
      href: { type: String, noAccessor: true },
    };
  }

  private readonly __deferredEvents: ElementEvent<T>[] = [];

  private readonly __machine = machine.withContext({
    resourceV8N: (this.constructor as typeof HypermediaResource).resourceV8N,
    resource: null,
    element: this,
    backup: null,
    errors: [],
    href: null,
  }) as StateMachine<ElementContext<T>, any, ElementEvent<T>>;

  private readonly __service = interpret(this.__machine)
    .onTransition(({ changed }) => changed && this.requestUpdate())
    .onChange(() => this.requestUpdate());

  private readonly __captureRequest = (evt: Event) => {
    if (!(evt instanceof RequestEvent) || evt.detail.source === this) return;

    const method = evt.detail.init[1]?.method?.toUpperCase() ?? 'GET';
    if (method === 'GET') this.__respondIfPossible(evt);

    this.__interceptUpdates(evt);
  };

  get errors(): ElementError[] {
    const { initialized } = this.__service;
    return initialized ? this.__service.state.context.errors : [];
  }

  get href(): string | null {
    const { initialized } = this.__service;
    return initialized ? this.__service.state.context.href : null;
  }

  set href(value: string | null) {
    if (value !== this.href) this.__send({ type: 'SET_HREF', data: value });
  }

  get resource(): T | null {
    const { initialized } = this.__service;
    return initialized ? this.__service.state.context.resource : null;
  }

  set resource(value: T | null) {
    if (!isEqual(value, this.resource)) this.__send({ type: 'SET_RESOURCE', data: value });
  }

  abstract readonly rel: string;

  connectedCallback(): void {
    super.connectedCallback();
    addEventListener('request', this.__captureRequest, { capture: true });

    if (!this.__service.initialized) {
      this.__service.start();
      this.__deferredEvents.forEach(evt => this.__service.send(evt));
      this.__deferredEvents.length = 0;
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    removeEventListener('request', this.__captureRequest, { capture: true });

    this.__service.stop();
  }

  protected _getErrorMessages(): Record<string, string> {
    return this.errors
      .filter(err => err.type === 'input')
      .reduce((map, err) => ({ ...map, [err.target!]: this._t(err.code!) }), {});
  }

  protected _setProperty(resource: Partial<T>): void {
    this.__send({ type: 'SET_PROPERTY', data: resource });
  }

  protected _restore(): void {
    this.__send({ type: 'RELOAD' });
  }

  protected _reload(): void {
    this.__send({ type: 'RELOAD' });
  }

  protected _submit(): void {
    this.__send({ type: 'SUBMIT' });
  }

  protected _delete(): void {
    this.__send({ type: 'DELETE' });
  }

  protected _is(state: string): boolean {
    return this.__service.state.matches(state);
  }

  private __send(evt: ElementEvent<T>) {
    this.__service.initialized ? this.__service.send(evt) : this.__deferredEvents.push(evt);
  }

  private __respondIfPossible(evt: RequestEvent) {
    const url = evt.detail.init[0].toString();
    let body: unknown | null = null;

    traverse(this.resource).forEach(function () {
      if (this.node?._links?.self?.href === url) {
        body = this.node;
        this.stop();
      }
    });

    if (body) evt.detail.handle(async () => new Response(JSON.stringify(body)));
  }

  private __interceptUpdates(evt: RequestEvent) {
    const url = evt.detail.init[0].toString();
    const method = evt.detail.init[1]?.method?.toUpperCase() ?? 'GET';

    evt.detail.onResponse(async () => {
      const patch = await evt.getPatch();
      if (this.href === null) return;

      const thisURL = generalizeURL(this.href);
      const requestURL = generalizeURL(url);

      if (patch === null) {
        if (requestURL === thisURL) this.resource = null;
      } else {
        const generalizedPatch = new Map<string, unknown>();
        patch.forEach((v, k) => generalizedPatch.set(generalizeURL(k), v));

        this.resource = traverse(this.resource).map(function (node) {
          if (node?._links?.first || !node?._links?.self) return;

          const embedUrl = generalizeURL(node._links.self.href);
          if (method === 'DELETE' && embedUrl === requestURL) return this.delete();

          const props = generalizedPatch.get(embedUrl);
          if (props) this.update(merge(node, props));
        });
      }
    });
  }
}
