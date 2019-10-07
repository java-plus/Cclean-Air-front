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
import { IndicateursComponent } from './indicateurs/indicateurs.component';
import { VisualiserIndicateursComponent } from './indicateurs/visualiser-indicateurs/visualiser-indicateurs.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AdministrationComponent } from './administration/administration.component';
import { RechercheComponent } from './recherche/recherche.component';
import { MenuComponent } from './menu/menu.component';
import { AlerteComponent } from './administration/alerte/alerte.component';
import { ProfilCompoComponent } from './profil-compo/profil-compo.component';
import { HistoriqueComponent } from './historique/historique.component';
import { CreerIndicateurComponent } from './indicateurs/creer-indicateur/creer-indicateur.component';
import { ModifierIndicateurComponent } from './indicateurs/modifier-indicateur/modifier-indicateur.component';

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
    IndicateursComponent,
    VisualiserIndicateursComponent,
    AdministrationComponent,
    HistoriqueComponent,
    CreerIndicateurComponent,
    ModifierIndicateurComponent,
    AlerteComponent
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
