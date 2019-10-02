import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';


import {AuthentificationComponent} from './authentification/authentification.component';


import {RouterModule} from '@angular/router';
import {ROUTES} from '../../app.routes';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RechercheComponent} from './recherche/recherche.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    RechercheComponent
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
