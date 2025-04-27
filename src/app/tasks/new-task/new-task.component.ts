import {Component, EventEmitter, Input, input, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTask, Task} from "../task/task.model";
import {TaskService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  // by móc korzystac z rozszerzenia ngModel do manipulowania danymi w formularzu, oraz innymi
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  // korzystamy z naszego singletona TaskService
  constructor(private readonly taskService: TaskService) {}

  // cancel event
  @Output() close = new EventEmitter<void>();
  @Input({required: true}) userId!: string;

  // po prostu emitujemy event by wiedziec ze cos sie zadzialo
  onCancel() {
    this.close.emit();
  }

  // zmienne uzupełniane na podstawie danych wpisanych w formularz
  enteredTitle = '';
  enteredSummary = '';
  // jako Signal, kod w html sie nie zmienia
  enteredDueDate = signal('');

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate()
      },
      this.userId
    );
    // oprocz dodania nowego taska emitujemy tez sygnał zamknęcia okna
    this.close.emit();
  }
}
