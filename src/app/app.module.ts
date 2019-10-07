import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InfosRGPDComponent } from './inscription/infos-rgpd/infos-rgpd.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdministrationComponent } from './administration/administration.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RechercheComponent } from './recherche/recherche.component';
import { MenuComponent } from './menu/menu.component';
import { ProfilCompoComponent } from './profil-compo/profil-compo.component';
import { CommuneComponent } from './commune/commune.component';
import { CommuneResultatsComponent } from './commune/commune-resultats/commune-resultats.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilCompoComponent,
    MenuComponent,
    RechercheComponent,
    InscriptionComponent,
    AuthentificationComponent,
    InfosRGPDComponent,
    AccueilComponent,
    AdministrationComponent,
    CommuneComponent,
    CommuneResultatsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
