import { Component, VERSION, ViewChild } from '@angular/core';
import { ButtonComponent } from './shared-components/buttons/button/button.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public fallback: any;

  @ViewChild('buttonElement', { static: false }) anna;

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
  sizes = [
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

  public copyText(size: string, type: string, outline = false) {
    let x = `<app-button`;

    if (size) x += ` size="${size}"`;
    if (type) x += ` type="${type}"`;
    if (outline) x += ` outline`;
    x += `></app-button>`;
    navigator.clipboard.writeText(x);
    setTimeout(() => (this.fallback = true));
  }
}
// <button class="mbz-btn mbz-btn-success"><span class="mbz-icon">i</span><span class="asd">Success</span></button>
//
