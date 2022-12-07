import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {Status} from "../../models/record";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPanelComponent {
  options: Array<[string, Status | '']> = [
    ['без', ''],
    ['обычные', Status.ordinary],
    ['важные', Status.important],
    ['выполненные', Status.completed]
  ]
  inputValue: string = ''
  selectedValue: Status | '' = ''
  @Output()
  public searchEvent = new EventEmitter()
  @Output()
  public cancelSearchEvent = new EventEmitter()
  search() {
    if (!this.inputValue && !this.selectedValue) {
      return
    }
    this.searchEvent.emit({inputValue: this.inputValue || null, selectedValue: this.selectedValue})
  }
  cancelSearch() {
    this.inputValue = ''
    this.selectedValue = ''
    this.cancelSearchEvent.emit()
  }
}
