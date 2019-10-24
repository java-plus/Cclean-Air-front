import { ResultatsRechercheComponent } from './resultats-recherche/resultats-recherche.component';
import { RecherchePopupComponent } from './recherche-popup/recherche-popup.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
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
import { CreerIndicateurComponent } from './indicateurs/creer-indicateur/creer-indicateur.component';
import { ModifierIndicateurComponent } from './indicateurs/modifier-indicateur/modifier-indicateur.component';
import { ResultatIndicateurComponent } from './indicateurs/resultat-indicateur/resultat-indicateur.component';
import { HistoriqueComponent } from './historique/historique.component';
import { DatePipe } from '@angular/common';


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
    ResultatsRechercheComponent,
    RecherchePopupComponent,
    CreerIndicateurComponent,
    ModifierIndicateurComponent,
    AlerteComponent,
    ResultatIndicateurComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [RecherchePopupComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const PopupElement = createCustomElement(RecherchePopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('recherche-popup-element', PopupElement);
  }
}
