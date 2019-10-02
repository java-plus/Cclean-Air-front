import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';


import {AuthentificationComponent} from './authentification/authentification.component';


import {RouterModule} from '@angular/router';
import {ROUTES} from '../../app.routes';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommuneComponent } from './commune/commune.component';
import { CommuneResultatsComponent } from './commune/commune-resultats/commune-resultats.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    CommuneComponent,
    CommuneResultatsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
