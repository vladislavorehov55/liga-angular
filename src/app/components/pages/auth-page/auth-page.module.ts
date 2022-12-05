import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthPageComponent} from './auth-page.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthPageComponent
  ]
})
export class AuthPageModule {
}
