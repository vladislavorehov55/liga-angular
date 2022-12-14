import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {RecordItem, Status} from "../../models/record";

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordsListComponent implements OnInit{
  ngOnInit() {}
  constructor() {}
  @Input()
  records!: Array<RecordItem>
  @Output()
  changeStatusEvent = new EventEmitter()
  @Output()
  deleteRecordEvent = new EventEmitter()
  editStatus(obj: {newStatus: Status, id: number}) {
    this.changeStatusEvent.emit(obj)
  }
  identify(index: number, item: RecordItem) {
    return item.id
  }

  get getter(){
    console.log('records-list')
    return true
  }
}

