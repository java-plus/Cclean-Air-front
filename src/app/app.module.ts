import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {InscriptionComponent} from './inscription/inscription.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthentificationComponent} from './authentification/authentification.component';
import {InfosRGPDComponent} from './inscription/infos-rgpd/infos-rgpd.component';
import {AccueilComponent} from './accueil/accueil.component';
import {RechercheComponent} from './recherche/recherche.component';


@NgModule({
  declarations: [
    AppComponent,
    RechercheComponent,
    InscriptionComponent,
    AuthentificationComponent,
    InfosRGPDComponent,
    AccueilComponent
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
