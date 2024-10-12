import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from "@angular/router";
import {ShoeListComponent} from "./app/shoe-list/shoe-list.component";
import {ShoeListItemComponent} from "./app/shoe-list-item/shoe-list-item.component";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes = [
  {path: '', component:ShoeListComponent },
  {path: 'shoe/:id', component: ShoeListItemComponent}
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});


