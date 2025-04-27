import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {UserComponent} from "./user/user.component";
import {HeaderComponent} from "./header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {TasksModule} from "./tasks/tasks.module";

// module to po prostu klasa do exportu
// adnotacja NgModule przechowuje wszystkie komponenty, ktore udostepnimy w tym module declarations
@NgModule({
  //przerobiony AppComponent jako nie standalone by mozna bylo uzyc w declarations
  declarations: [AppComponent, HeaderComponent, UserComponent], //none standalone
  imports: [BrowserModule, FormsModule, SharedModule, TasksModule], //w imports bo są standalone
  // wymagany tez import BrowserModule zawsze wymagany do uruchomienia apki, jak standalone to Angular dodaje go samemu
  bootstrap: [AppComponent] //wskazanie na początek drzewa componenów
})
export class AppModule {
}
