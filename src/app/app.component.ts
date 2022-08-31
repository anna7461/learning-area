import { Component, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public fallback: any;
  @ViewChild('buttonElement', { static: false }) anna;

  /**
   * Put clickend element's html element to clipbord to allow paste anywhere.
   * @author Levon Hakobyan
   */
  public handleClick() {
    const tagText = this.anna.nativeElement.outerHTML;
    navigator.clipboard.writeText(tagText.replace(/\b\s_ngcontent\S+/gi, ''));
  }
}
// <button class="mbz-btn mbz-btn-success"><span class="mbz-icon">i</span><span class="asd">Success</span></button>
