import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {Task} from './task.model'
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";
import {TaskService} from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  constructor(private readonly taskService: TaskService) {
  }

  @Input({required: true}) task!: Task;

  // usuniecie taska bez eventu
  completeTask() {
    this.taskService.removeTask(this.task.id);
  }

  // // by emitowac event kliknięcia w button Complete
  // @Output() complete = new EventEmitter<string>();
  //
  // // co ma sie zadziac w evencie
  // onCompleteTask() {
  //   this.complete.emit(this.task.id);
  // }
  //
}
