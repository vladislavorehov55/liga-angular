import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthPageComponent} from './auth-page.component';
import {FormsModule} from "@angular/forms";
import {EnvironmentService} from "../../../services/environment/environment.service";


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
  ],
  providers: [EnvironmentService]
})
export class AuthPageModule {
}
