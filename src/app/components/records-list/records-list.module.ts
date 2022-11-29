import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsListComponent } from './records-list.component';
import {RecordItemModule} from "../record-item/record-item.module";



@NgModule({
  declarations: [
    RecordsListComponent
  ],
  imports: [
    CommonModule,
    RecordItemModule
  ],
  exports: [
    RecordsListComponent
  ]
})
export class RecordsListModule { }
