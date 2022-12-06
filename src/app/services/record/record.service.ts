import {Injectable} from "@angular/core";
import {RecordItem, Status} from "../../models/record";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export interface ISearchFormFields {
  inputValue: string
  selectedValue: Status
}

@Injectable()
export class RecordService {
  private records: Array<RecordItem> = []
  private searchedRecords: Array<RecordItem> | null = null

  constructor(private http: HttpClient) {
  }

  get currentRecords() {
    return this.searchedRecords ? this.searchedRecords : this.records
  }

  getRecords() {
    this.http.get("assets/todo-list.json").pipe(map((data: any) => {
      return data.recordsList
    })).subscribe((data: RecordItem[]) => {
      this.records = data
    })

  }

  addRecord(text: string) {
    this.records = [{id: Date.now(), status: Status.ordinary, description: text}, ...this.records]
  }

  deleteRecord(id: number) {
    this.records = this.records.filter(record => record.id !== id)
  }

  editRecordStatus({newStatus, id}: { id: number, newStatus: Status }) {
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
