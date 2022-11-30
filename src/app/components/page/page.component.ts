import { Component, OnInit } from '@angular/core';
import {ISearchFormFields, RecordService} from "../../services/record.service";
import {Status} from "../../models/record";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [RecordService]
})
export class PageComponent implements OnInit {
  ngOnInit() {}
  constructor(public recordService: RecordService) {}
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
