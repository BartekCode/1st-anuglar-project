import { Component } from '@angular/core';

@Component({
  selector: 'app-header', //czyli properta jaka bedzie zastepowac nasz komponenet w html
 // template: '<h1>Template</h1>' //content wyswietlany przez ten component mozna by tu wkleic tagi html
  templateUrl: './header.component.html', //url do contentu preferowane podejscie
  standalone: true, //W angular 19 i w góre true by default
  styleUrl: './header.component.css' //style do naszego komponentu
})
export class HeaderComponent {

}
