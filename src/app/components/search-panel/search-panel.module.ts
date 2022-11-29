import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPanelComponent } from './search-panel.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SearchPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchPanelComponent
  ]
})
export class SearchPanelModule { }
