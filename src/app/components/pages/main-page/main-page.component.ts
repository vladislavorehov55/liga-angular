import { Component } from '@angular/core';
import {ISearchFormFields, RecordService} from "../../../services/record.service";
import {Status} from "../../../models/record";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [RecordService]
})
export class MainPageComponent {
  constructor(private _recordService: RecordService) {}
  get recordService() {
    return this._recordService
  }
  addTask(task: string) {
    this.recordService.addRecord(task)
  }
  searchRecords(obj: ISearchFormFields) {
    this.recordService.searchRecords(obj)
  }
  cancelSearchRecords() {
    this.recordService.cancelSearchRecords()
  }
  editRecordStatus(obj: {newStatus: Status, id: number}) {
    this.recordService.editRecordStatus(obj)
  }
  deleteRecord(id: number) {
    this.recordService.deleteRecord(id)
  }
}
