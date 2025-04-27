import { Component } from '@angular/core';
import { HeaderComponent} from "./header/header.component"; // importujemy nasz komponent
import { UserComponent } from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";
import {NgForOf, NgIf} from "@angular/common"; // import kolejnego komponentu

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgForOf, NgIf], //dodajemy nasze komponenty do importowanych rzeczy
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //by miec dostęp do tych danym w template app.component
  users = DUMMY_USERS
  // selectedUserId moze byc nullem/undefined
  selectedUserId?: string;

  // metoda która ustawi id wybranego usera
  onSelectUser(id: string) {
    this.selectedUserId = id
    console.log('Selected user with id ' + id);
  }

  // get metoda która zwróci wybrane usera
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
}
