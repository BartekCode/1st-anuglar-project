import {Component} from '@angular/core';
import {DUMMY_USERS} from "./dummy-users";

@Component({
  selector: 'app-root',
  standalone: false, //by mozna bylo zrobic module
//  imports: [HeaderComponent, UserComponent, TasksComponent, NgForOf, NgIf], //dodajemy nasze komponenty do importowanych rzeczy
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
