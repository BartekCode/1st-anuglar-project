import {Component, computed, Input, output} from '@angular/core';
import {UserInput} from "./user.model";
// import {DUMMY_USERS} from "../dummy-users";
// // rando number od 0 do max length of dummy userser
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // mozemy dekorowac przy uzyciu decoartora
  // mechanizm angulara do ustawiania tej property
  // uzycie wykrzyknika mowi ze wiemy ze jakas wartosc zostanie przypisana do tej property
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // zamiana Input na obiekt, tworzymy typ obiektu w {}
  @Input({required: true}) user!: UserInput; // korzytstamy z utworzonego typu/interfejsu
  // by wiedziec który user jest wybrany
  @Input({required: true}) selected!: boolean;

  // w nawasach default value, w <> jaki typ bedzie zwrócony przez input
  // jak dodajemy reqquired to juz nie mozmey dodaj default initial value,
  // bo powiedzielismy ze wartosc zawsze bedzie uzupelnione
  // avatar = input.required<string>();
  // name = input.required<string>();

  // przerabiamy imagePath na computed function tez signal!, wykorzystuemy w niej signal czy zawsze wywolanie jako metode ()*
  // computed fajne bo zmieni sie wtedy gdy zmieni sie avatar nie wazne ile razy wywolamy
  // czyli co wywolanie po prostu zwraca wartosc nie tworzy tego stringa
  imagePath = computed(()=> 'assets/users/' + this.user.avatar)

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  // input z id
  // @Input({required: true}) id!: string;

  // tworzymy event, który wysle informacje o klikniętym userze, id usera
  // @Output() select = new EventEmitter<string>();
  // inne podejscie do stworzenai eventu, w <> jaki typ danych bedzie emitowany
  select = output<{ id: string }>();

  // zostanie wysłane id
  onSelectedUser() {
    this.select.emit({id: this.user.id});
  }


  // dzieki temu mozemy teraz dane z selectedUser zaczytac w user.component.html bo będą tam dostępne
  // selectedUser = signal(DUMMY_USERS[randomIndex])  //inital value for the signal
  // metoda Getter która zwroci juz bezsporedni namiar na src avatara
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
  // w signal powinnismy tworzyć taki computed value
  // imagePathSignal = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // wyliczamy randomowy index i wyciągamy nim wartośc z kolekcji i przypisujemy do selectedUser
  // onSelectUser(){
  //   const index = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[index]); //dane w signal ustawiamy setterem
  //this.selectedUser = DUMMY_USERS[index];
  // }
}
