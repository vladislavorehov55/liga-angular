import {records} from "../data/records";
import {RecordItem, Status} from "../models/record";

export interface ISearchFormFields {
  inputValue: string
  selectedValue: Status
}

export class RecordService {
  private records = records
  private searchedRecords: Array<RecordItem> | null = null
  constructor() {}

  get currentRecords() {
    return this.searchedRecords ? this.searchedRecords : this.records
  }

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

  searchRecords({inputValue, selectedValue}: ISearchFormFields) {
    const regexp = new RegExp(inputValue, 'i')
    this.searchedRecords = this.records.filter(record => {
      return record.status === selectedValue || record.description.match(regexp)
    })
  }
  cancelSearchRecords() {
    this.searchedRecords = null
  }
}
