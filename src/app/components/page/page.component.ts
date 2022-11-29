import { Component, OnInit } from '@angular/core';
import {RecordService} from "../../services/record.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [RecordService]
})
export class PageComponent implements OnInit {
  ngOnInit() {}
  constructor(public recordService: RecordService) {}
  addTask(task: string) {
    this.recordService.addRecord(task)
  }
}
