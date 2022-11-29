import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  ngOnInit() {}
  taskValue: string = ''
  @Output()
  public addEvent = new EventEmitter()
  addTask(e: SubmitEvent) {
    e.preventDefault()
    this.addEvent.emit(this.taskValue)
    this.taskValue = ''
  }
}
