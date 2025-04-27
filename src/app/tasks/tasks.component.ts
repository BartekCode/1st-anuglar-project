import {Component, input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTask} from "./task/task.model";
// import naszego serwicu
import {TaskService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    TaskComponent,
    NewTaskComponent,

  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // wymagany input danych w tasks html template
  userId = input.required<string>();
  name = input.required<string>();

  // wstrzyknięcie serwisu poprzez konstruktor!! jak w spring!!
  constructor(private readonly taskService: TaskService) {}

  // zwróci nam tablice tasków wybranego usera
  get selectedUsersTasks() {
    return this.taskService.getUserTask(this.userId())
  }

  // properta która mowi ze został kliknięty przycis
  isAddingNewTask = false

  // metoda odpala po kliknięciu w przycisk Add new task
  onAddNewTask() {
    this.isAddingNewTask = true;
  }

  onCloseAddNewTask() {
    this.isAddingNewTask = false;
  }

  // // metoda z dodaniem nowego taska
  // addNewTask(newTask: NewTask){
  //   this.taskService.addTask(newTask,this.userId())
  //   this.isAddingNewTask = false
  // }
}
