import { AnimationBuilder, animate, style } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { BasketView } from 'ish-core/models/basket/basket.model';
import { HttpError } from 'ish-core/models/http-error/http-error.model';

/**
 * The Mini Basket Component displays a quick overview over the users basket items.
 * It uses the {@link ProductImageComponent} for the rendering of product images.
 *
 * @example
 * <ish-mini-basket
      [basket]="basket$ | async"
      [view]="view"
      [basketAnimation]="basketAnimation$ | async"
      [error]="basketError$ | async"
    ></ish-mini-basket>
 */
@Component({
  selector: 'ish-mini-basket',
  templateUrl: './mini-basket.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniBasketComponent implements OnChanges {
  /**
   * The basket that should be displayed.
   */
  @Input() basket: BasketView;
  @Input() view: 'auto' | 'small' | 'full' = 'auto';
  @Input() basketAnimation = '';
  @Input() error: HttpError;
  /**
   * The vertical product slider element reference.
   */
  @ViewChild('slider')
  slider: ElementRef;

  isCollapsed = true;
  itemCount = 0;
  currentProduct = 0;

  constructor(private animationBuilder: AnimationBuilder) {}

  ngOnChanges(c: SimpleChanges) {
    this.animateBasket(c);
    if (this.basket) {
      this.itemCount = this.basket.totalProductQuantity;
    } else {
      this.resetScroller();
      this.itemCount = 0;
    }
  }

  /**
   * Animate basket after the product line item count has changed
   * Open basket if an error occured
   */
  animateBasket(c: SimpleChanges) {
    if (c && c.basketAnimation) {
      if (this.basketAnimation && c.basketAnimation.currentValue === 'tada') {
        this.open();
      } else {
        this.collapse();
      }
    }
    if (c && !!c.error && this.error) {
      this.open();
    }
  }

  /**
   * Toggle the collapse state of the mini basket programmatically.
   */
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  /**
   * Collapse the mini basket programmatically.
   */
  collapse() {
    this.isCollapsed = true;
  }

  /**
   * Open the mini basket programmatically.
   */
  open() {
    this.isCollapsed = false;
  }

  /**
   * Slider control scroll up.
   */
  scrollUp() {
    if (!this.slider || this.currentProduct === 0) {
      return;
    }

    const slider: HTMLDivElement = this.slider.nativeElement;
    const tileHeight = slider.children.length > 0 ? slider.lastElementChild.getBoundingClientRect().height : 0;

    this.currentProduct -= 1;
    const offset = tileHeight * this.currentProduct;
    this.animate(offset);
  }

  /**
   * Slider control scroll down.
   */
  scrollDown() {
    if (!this.slider || !this.basket || !this.basket.lineItems) {
      return;
    }

    const slider: HTMLDivElement = this.slider.nativeElement;
    const tileHeight = slider.children.length > 0 ? slider.lastElementChild.getBoundingClientRect().height : 0;
    if (this.currentProduct < this.basket.lineItems.length - 2) {
      this.currentProduct += 1;
      const offset = tileHeight * this.currentProduct;
      this.animate(offset);
    }
  }

  /**
   * Animate the slider container.
   * @param offset vertical translate offset
   */
  animate(offset: number) {
    if (!this.slider) {
      return;
    }

    const slider = this.slider.nativeElement as HTMLDivElement;
    const scrollAnimation = this.animationBuilder.build([
      animate('200ms ease-in', style({ transform: `translateY(-${offset}px)` })),
    ]);

    const player = scrollAnimation.create(slider);
    player.play();
  }

  /**
   * Reset vertical scroll component if basket changes
   */
  resetScroller() {
    this.currentProduct = 0;
    this.animate(0);
  }
}
