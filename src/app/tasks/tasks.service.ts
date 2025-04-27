import {NewTask, Task} from "./task/task.model";
import {Injectable} from "@angular/core";

// export by mozna ją bylo zaimportowac w innych miejscahc
@Injectable({providedIn: 'root'}) //jak @Service w spring by angular zarządzał tą klasą
// i mozna jak bylo wstrzykiwac jako singleton
export class TaskService {
  // tworzymy tablice []
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular',
      dueDate: '2025-06-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build your first prototype of the online show website',
      dueDate: '2025-04-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template',
      dueDate: '2025-05-15'
    }
  ]

  constructor() {
    const tasks = localStorage.getItem("tasks");

    // jezeli są juz jakies dane w przegladarce to nadpisujemy nimi dane z aplikacji
    if (tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  // metody do manipulowania danymi
  getUserTask(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    })
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id != id);
    this.saveTasks();
  }

  // by w localStorage byly te same taski co w pamieci
  private saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
