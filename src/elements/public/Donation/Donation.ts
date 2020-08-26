import { ScopedElementsMap } from '@open-wc/scoped-elements';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import { property, query } from 'lit-element';
import { html, TemplateResult } from 'lit-html';
import { Translatable } from '../../../mixins/translatable';
import { parseDuration } from '../../../utils/parse-duration';
import { CheckboxChangeEvent, ChoiceChangeEvent, DropdownChangeEvent } from '../../private/events';
import { Checkbox, Choice, Dropdown, ErrorScreen, Group, I18N } from '../../private/index';
import { DonationChangeEvent } from './DonationChangeEvent';
import { DonationSubmitEvent } from './DonationSubmitEvent';

export class Donation extends Translatable {
  public static get scopedElements(): ScopedElementsMap {
    return {
      'vaadin-text-area': customElements.get('vaadin-text-area'),
      'x-error-screen': ErrorScreen,
      'vaadin-button': customElements.get('vaadin-button'),
      'x-dropdown': Dropdown,
      'x-checkbox': Checkbox,
      'x-choice': Choice,
      'x-group': Group,
      'x-i18n': I18N,
    };
  }

  private get __data() {
    const data = new FormData();

    if (typeof this.designation === 'string') {
      data.set('designation', this.designation);
    } else if (Array.isArray(this.designation)) {
      data.set('designation', JSON.stringify(this.designation));
    }

    if (typeof this.amount === 'number' && typeof this.currency === 'string') {
      data.set('price', `${this.amount.toFixed(2)}${this.currency}`);
    }

    if (typeof this.frequency === 'string') data.set('sub_frequency', this.frequency);
    if (typeof this.comment === 'string') data.set('comment', this.comment);
    if (typeof this.image === 'string') data.set('image', this.image);
    if (typeof this.code === 'string') data.set('code', this.code);
    if (typeof this.name === 'string') data.set('name', this.name);
    if (typeof this.url === 'string') data.set('url', this.url);

    data.set('anonymous', this.anonymous.toString());
    data.set('quantity', '1');

    return data;
  }

  @query('form')
  private __form!: HTMLFormElement;

  @property({ type: String })
  public currency: null | string = null;

  @property({ type: Array })
  public custom: null | string[] = null;

  @property({ type: Number })
  public amount: null | number = null;

  @property({ type: Array })
  public amounts: null | number[] = null;

  @property({ type: String })
  public frequency: null | string = null;

  @property({ type: Array })
  public frequencies: null | string[] = null;

  @property({ type: Array })
  public designation: null | string | string[] = null;

  @property({ type: Array })
  public designations: null | string[] = null;

  @property({ type: String })
  public comment: null | string = null;

  @property({ reflect: true, type: Boolean })
  public anonymity = false;

  @property({ reflect: true, type: Boolean })
  public anonymous = false;

  @property({ type: String })
  public image: null | string = null;

  @property({ type: String })
  public store: null | string = null;

  @property({ type: String })
  public name: null | string = null;

  @property({ type: String })
  public code: null | string = null;

  @property({ type: String })
  public url: null | string = null;

  public constructor() {
    super('donation');
  }

  public submit(): void {
    /* istanbul ignore if  */
    if (this.dispatchEvent(new DonationSubmitEvent())) this.__form.submit();
  }

  public render(): TemplateResult {
    if (!this.currency || !this.amount || !this.store || !this.name) {
      return html`
        <x-error-screen data-testid="error" type="setup_needed" class="relative"></x-error-screen>
      `;
    }

    return html`
      <form
        class="sr-only"
        method="POST"
        action="https://${this.store}.foxycart.com/cart"
        data-testid="form"
      >
        ${[...this.__data.entries()].map(
          ([name, value]) => html`<input type="hidden" name=${name} value=${value} />`
        )}
      </form>

      <section>
        ${this.amounts && this.amounts.length > 0
          ? html`
              <x-group frame>
                <x-i18n ns=${this.ns} lang=${this.lang} key="amount" slot="header"></x-i18n>
                <x-choice
                  ?custom=${!!this.custom?.includes('amount')}
                  .getText=${(v: string) => this.__translateAmount(parseInt(v, 10))}
                  .items=${this.amounts.map(String)}
                  .value=${this.amount.toString()}
                  type="integer"
                  lang=${this.lang}
                  min="1"
                  ns=${this.ns}
                  data-testid="amount"
                  @change=${(evt: ChoiceChangeEvent) => {
                    const value = parseInt(evt.detail as string);
                    this.amount = isNaN(value) ? /* istanbul ignore next */ 1 : value;
                  }}
                >
                </x-choice>
              </x-group>

              <slot name="amount" class="block my-m"></slot>
            `
          : ''}
      </section>

      <section>
        ${this.designations && this.designations.length > 0
          ? html`
              <x-group frame>
                <x-i18n ns=${this.ns} lang=${this.lang} key="designation" slot="header"></x-i18n>
                <x-choice
                  ?custom=${!!this.custom?.includes('designation')}
                  .items=${this.designations}
                  .value=${this.designation}
                  type="textarea"
                  lang=${this.lang}
                  ns=${this.ns}
                  data-testid="designation"
                  @change=${(evt: ChoiceChangeEvent) => {
                    this.designation = evt.detail as string[];
                  }}
                >
                </x-choice>
              </x-group>

              <slot name="designation" class="block my-m"></slot>
            `
          : ''}
      </section>

      <section>
        ${typeof this.comment === 'string'
          ? html`
              <vaadin-text-area
                placeholder=${this._t('comment_placeholder').toString()}
                value=${this.comment!}
                label=${this._t('comment_label').toString()}
                class="w-full"
                data-testid="comment"
                @input=${(evt: InputEvent) => {
                  evt.stopPropagation();
                  this.comment = (evt.target as HTMLTextAreaElement).value;
                }}
              >
              </vaadin-text-area>

              <slot name="comment" class="block my-m"></slot>
            `
          : ''}
      </section>

      <section>
        ${this.anonymity
          ? html`
              <x-checkbox
                class="my-m"
                data-testid="anonymity"
                ?checked=${this.anonymous}
                @change=${(evt: CheckboxChangeEvent) => (this.anonymous = evt.detail)}
              >
                ${this._t('anonymous')}
              </x-checkbox>
            `
          : ''}

        <div class="flex -m-s">
          <div class="flex-1 p-s">
            <vaadin-button
              class="w-full"
              theme="primary"
              data-testid="submit"
              @click=${() => this.submit()}
            >
              <x-i18n
                .opts=${{
                  amount: this.__translateAmount(this.amount),
                  frequency: this.frequency ? this.__translateFrequency(this.frequency) : '',
                }}
                lang=${this.lang}
                key=${this.frequency && !this.frequencies?.length ? 'donate_recurrently' : 'donate'}
                ns=${this.ns}
              >
              </x-i18n>
            </vaadin-button>
          </div>

          ${this.frequencies && this.frequencies.length > 0
            ? html`
                <div class="flex-1 p-s">
                  <x-dropdown
                    .value=${this.frequency}
                    .items=${this.frequencies}
                    .getText=${this.__translateFrequency.bind(this)}
                    data-testid="frequency"
                    @change=${(evt: DropdownChangeEvent) => {
                      this.frequency = evt.detail as string;
                    }}
                  >
                  </x-dropdown>
                </div>
              `
            : ''}
        </div>
      </section>
    `;
  }

  public updated(): void {
    this.dispatchEvent(new DonationChangeEvent(this.__data));
  }

  private __translateFrequency(frequency: string) {
    if (frequency.startsWith('0')) return this._t('frequency_once');
    if (frequency === '.5m') return this._t('frequency_0_5m');

    const { count, units } = parseDuration(frequency);
    return this._t('frequency', {
      units: this._t(units, { count }),
      count,
    });
  }

  private __translateAmount(amount: number) {
    return amount.toLocaleString(this.lang, {
      minimumFractionDigits: 0,
      currency: this.currency!,
      style: 'currency',
    });
  }
}
