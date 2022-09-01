import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-kit-demo',
  templateUrl: './ui-kit-demo.component.html',
  styleUrls: ['./ui-kit-demo.component.scss'],
})
export class UiKitDemoComponent implements OnInit {
  public showFallback: any;
  public handleMessage: string = 'copy';

  // @ViewChild('buttonElement', { static: false }) anna;

  types = [
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
  // sizes = [
  //   'ext',
  //   'lg',
  //   'sm',
  //   'xs',
  //   'xl',
  //   'xl-min-width-100',
  //   'xl-min-width-150',
  //   'semi-xxl',
  //   'xxl',
  // ];
  sizes = ['sm', 'xl', 'semi-xxl', 'lg', 'xxl', 'ext'];
  /**
   * Put clickend element's html element to clipbord to allow paste anywhere.
   * @author Levon Hakobyan
   */
  // public handleClick() {
  //   const tagText = this.anna.nativeElement.outerHTML;
  //   navigator.clipboard.writeText(tagText.replace(/\b\s_ngcontent\S+/gi, ''));

  //   setTimeout(() => {
  //     this.fallback = true;
  //   }, 100);
  // }
  // public showFallback(message: string, type: string) {}

  // public copyText(size: string, type: string, outline = false): void {
  //   let x = `<app-button`;

  //   if (size) x += ` size="${size}"`;
  //   if (type) x += ` type="${type}"`;
  //   if (outline) x += ` outline`;
  //   x += `></app-button>`;
  //   navigator.clipboard.writeText(x);
  //   this.showFallback = true;
  // }

  public copyText(type: string, size: string, outline = false) {
    let x = `<app-button`;
    if (size) x += ` size="${size}"`;
    if (type) x += ` type="${type}"`;
    if (outline) x += ` outline`;
    x += ` label="Button"></app-button>`;
    navigator.clipboard.writeText(x);
  }
  constructor() {}

  ngOnInit() {}
}
