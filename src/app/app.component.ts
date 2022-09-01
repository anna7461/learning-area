import { Component, VERSION, ViewChild } from '@angular/core';
import { ButtonComponent } from './shared-components/buttons/button/button.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  
}
