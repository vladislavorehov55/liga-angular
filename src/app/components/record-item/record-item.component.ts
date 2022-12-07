import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {RecordItem} from "../../models/record";

@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrls: ['./record-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordItemComponent implements OnInit{
  @Input()
  record!: RecordItem

  ngOnInit() { }
}
