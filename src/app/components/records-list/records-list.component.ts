import { Component, OnInit } from '@angular/core';
import {records} from "../../data/records";

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.scss']
})
export class RecordsListComponent implements OnInit{
  ngOnInit() {
  }
  records = records
}

