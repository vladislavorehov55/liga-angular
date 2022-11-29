import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFormComponent } from './add-form.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AddFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddFormComponent
  ]
})
export class AddFormModule { }
