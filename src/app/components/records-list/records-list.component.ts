import { Component, OnInit, Input } from '@angular/core';
import {RecordItem} from "../../models/record";

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.scss'],
})
export class RecordsListComponent implements OnInit{
  ngOnInit() {}
  constructor() {}
  @Input()
  records!: Array<RecordItem>
}

