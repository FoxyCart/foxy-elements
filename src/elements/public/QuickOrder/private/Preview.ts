import { spread } from '@open-wc/lit-helpers/src/spread';
import { ScopedElementsMap } from '@open-wc/scoped-elements';
import { html, PropertyDeclarations, TemplateResult } from 'lit-element';
import { Themeable } from '../../../../mixins/themeable';
import { Picture } from './Picture';
import { PictureGrid } from './PictureGrid';

class Bundle extends PictureGrid<PreviewItem[]> {
  public static get scopedElements(): ScopedElementsMap {
    return { ...super.scopedElements, 'x-item': Picture };
  }
}

class BundleGrid extends PictureGrid<PreviewItem[][]> {
  public static get scopedElements(): ScopedElementsMap {
    return { ...super.scopedElements, 'x-item': Bundle };
  }
}

export interface PreviewItem {
  quantity: number;
  image: string;
}

export class Preview extends Themeable {
  public static get scopedElements(): ScopedElementsMap {
    return {
      'x-picture': Picture,
      'x-bundle-grid': BundleGrid,
    };
  }

  public static get properties(): PropertyDeclarations {
    return {
      quantity: { attribute: false },
      image: { attribute: false },
      items: { attribute: false },
    };
  }

  public quantity = 0;

  public image?: string;

  public items: PreviewItem[] = [];

  public render(): TemplateResult {
    const { quantity, image = '' } = this;
    const empty = quantity === 0;
    const props = spread({
      class: 'w-full h-full',
      exportparts: 'picture',
    });

    if (this.items.length === 0) {
      return html`<x-picture ...=${props} .data=${{ quantity, image }}></x-picture>`;
    } else {
      const data = new Array(Math.max(1, quantity)).fill(this.items);
      return html`<x-bundle-grid ...=${props} .empty=${empty} .data=${data}></x-bundle-grid>`;
    }
  }
}
