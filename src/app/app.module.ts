import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedComponentsComponent } from './shared-components/shared-components.component';
import { QuantityInputComponent } from './shared-components/forms/quantity-input/quantity-input.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SharedComponentsComponent,
    QuantityInputComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
