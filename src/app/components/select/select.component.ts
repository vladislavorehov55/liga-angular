import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Status} from "../../models/record";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SelectComponent implements OnInit{

  ngOnInit() {}
  changeStatusHandler() {
    this.changeStatusEvent.emit(this.statusRecord)
  }
  @Input()
  statusRecord!: Status
  @Output()
  changeStatusEvent = new EventEmitter()
}
