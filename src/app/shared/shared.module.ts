import {NgModule} from "@angular/core";
import {CardComponent} from "./card/card.component";

@NgModule({
  declarations: [CardComponent],
  // by te componenety były dostępne dla innych modułów
  exports: [CardComponent],
})
export class SharedModule {}
