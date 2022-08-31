import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const types = [
  'success',
  'info',
  'warning',
  'danger',
  'dark',
  'secondary',
  'primary',
  'light',
  'transparent',
  'blue',
  'white',
];
const sizes = [
  'ext',
  'lg',
  'sm',
  'xs',
  'xl',
  'xl-min-width-100',
  'xl-min-width-150',
  'semi-xxl',
  'xxl',
];
const isUndefined = (object: unknown): boolean => object === undefined;
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  public cssClass: string;

  @Input() type: string;
  @Input() label: string;
  @Input() icon: string;
  @Input() disabled: boolean;
  @Input() outline: any;
  @Input() size: string;
  /**
   * @deprecated
   */
  @Input() alt: any;
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {
    if (types.indexOf(this.type) === -1) this.type = '';
    if (sizes.indexOf(this.size) === -1) this.size = '';
    this.outline = !isUndefined(this.outline);

    /* @todo remove this, when deprecated alt input will be removed*/
    if (!this.outline && !isUndefined(this.alt)) {
      this.outline = true;
    }
    this.initCssClass();
  }

  public handleClick(event: MouseEvent): void {
    if (this.disabled) return;
    this.onClick.emit(event);
  }

  private initCssClass(): void {
    this.cssClass = '';
    this.cssClass += 'mbz-btn' + (this.outline ? '-alt' : '');
    this.cssClass += this.size !== '' ? ' mbz-btn-' + this.size : '';
    this.cssClass += this.type !== '' ? ' mbz-btn-' + this.type : '';
  }
}
