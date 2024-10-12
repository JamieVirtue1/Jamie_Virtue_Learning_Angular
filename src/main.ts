import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {ShoeListItemComponent} from "./app/shoe-list-item/shoe-list-item.component";
import {ModifyShoeComponent} from "./app/modify-shoe/modify-shoe.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = [
  {path:'', redirectTo: '/shoe', pathMatch: 'full'},
  {path: 'shoe', component: ShoeListItemComponent},
  {path: 'modify-shoe', component: ModifyShoeComponent},
  {path: '**', component: PageNotFoundComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));


