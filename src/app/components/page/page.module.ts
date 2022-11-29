import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import {RecordsListModule} from "../records-list/records-list.module";
import {AddFormModule} from "../add-form/add-form.module";



@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    RecordsListModule,
    AddFormModule
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
