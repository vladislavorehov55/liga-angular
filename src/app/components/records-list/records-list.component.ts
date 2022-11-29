import { Component, OnInit } from '@angular/core';
import {RecordService} from "../../services/record.service";

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.scss'],
  providers: [RecordService]
})
export class RecordsListComponent implements OnInit{
  ngOnInit() {}
  constructor(public recordService: RecordService) {}
}

