import {NgModule} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksComponent} from "./tasks.component";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent], //exportujemy tylko wykorzystywany przez inne moduly/componenty component
  imports: [SharedModule, FormsModule, CommonModule],// commonmodule bo BrowserModule tylko do uzycia w root module
})
export class TasksModule {
}
