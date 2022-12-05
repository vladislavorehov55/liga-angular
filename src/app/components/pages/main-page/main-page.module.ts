import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {RecordsListModule} from "../../records-list/records-list.module";
import {AddFormModule} from "../../add-form/add-form.module";
import {SearchPanelModule} from "../../search-panel/search-panel.module";



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RecordsListModule,
    AddFormModule,
    SearchPanelModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
