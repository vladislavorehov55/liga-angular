import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ISearchFormFields, RecordService} from "../../../services/record/record.service";
import {Status} from "../../../models/record";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [RecordService],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MainPageComponent implements OnInit {
  constructor(private _recordService: RecordService) {}

  ngOnInit() {
    this._recordService.getDataRecords()
  }
  get currentRecords() {
    console.log('fg')
    const {searchedRecords, records} = this._recordService
    return searchedRecords ? searchedRecords : records
  }


  addTask(task: string) {
    this._recordService.addRecord(task)
  }
  searchRecords(obj: ISearchFormFields) {
    this._recordService.searchRecords(obj)
  }
  cancelSearchRecords() {
    this._recordService.cancelSearchRecords()
  }
  editRecordStatus(obj: {newStatus: Status, id: number}) {
    this._recordService.editRecordStatus(obj)
  }
  deleteRecord(id: number) {
    this._recordService.deleteRecord(id)
  }
}
