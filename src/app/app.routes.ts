import { Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AccueilComponent } from './accueil/accueil.component';
import { IndicateursComponent } from './indicateurs/indicateurs.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AdministrationComponent } from './administration/administration.component';
import { ProfilCompoComponent } from './profil-compo/profil-compo.component';
import { ResultatsRechercheComponent } from './resultats-recherche/resultats-recherche.component';
import { AlerteComponent } from './administration/alerte/alerte.component';
import { ConnexionGuard } from "./connexion-guard";
import { HistoriqueComponent } from './historique/historique.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'connexion',
    component: AuthentificationComponent
  },
  {
    path: 'recherche',
    component: RechercheComponent,
    canActivate: [ConnexionGuard]
  },
  {
    path: 'indicateurs',
    component: IndicateursComponent,
    canActivate: [ConnexionGuard]
  },
  {
    path: 'profil',
    component: ProfilCompoComponent,
    canActivate: [ConnexionGuard]
  },
  {
    path: 'resultats',
    component: ResultatsRechercheComponent,
    canActivate: [ConnexionGuard]
  },
  {
    path: 'historique/:codeInsee',
    component: HistoriqueComponent,
    canActivate: [ConnexionGuard]
  },
  {
    path: '',
    canActivateChild: [ConnexionGuard],
    children: [
      {
        path: 'admin',
        component: AdministrationComponent
      },
      {
        path: 'admin/alerte',
        component: AlerteComponent
      }
    ]
  }

];
