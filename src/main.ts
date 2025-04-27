import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
// prawdiłowe podejscie ze wołamy boostrap raz na 1 komponencie, który w sobie posiada wiele innych potrzebnych
// nasz komponentów
