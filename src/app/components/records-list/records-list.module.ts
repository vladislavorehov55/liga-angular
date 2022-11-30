import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsListComponent } from './records-list.component';
import {RecordItemModule} from "../record-item/record-item.module";
import {SelectModule} from "../select/select.module";



@NgModule({
  declarations: [
    RecordsListComponent
  ],
  imports: [
    CommonModule,
    RecordItemModule,
    SelectModule
  ],
  exports: [
    RecordsListComponent
  ]
})
export class RecordsListModule { }
