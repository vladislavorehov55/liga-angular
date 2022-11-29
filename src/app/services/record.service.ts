import {Injectable} from '@angular/core';
import {records} from "../data/records";
import {Status} from "../models/record";

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  records = records
  constructor() { }
  addRecord(text: string) {
    this.records = [{id: Date.now(), status: Status.ordinary, description: text}, ...this.records]
  }
  deleteRecord(id: number) {
    this.records = this.records.filter(record => record.id !== id)
  }
  editRecordStatus(id: number, newStatus: Status) {
    for (let record of this.records) {
      if (record.id === id) {
        record.status = newStatus
        return
      }
    }
  }
}
