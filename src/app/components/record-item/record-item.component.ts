import { Component, OnInit } from '@angular/core';
import {records} from "../../data/records";

@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrls: ['./record-item.component.scss']
})
export class RecordItemComponent implements OnInit{
  record = records[0]
  ngOnInit() {
  }
}
