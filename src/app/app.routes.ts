import {Routes} from '@angular/router';
import {InscriptionComponent} from './inscription/inscription.component';
import {AuthentificationComponent} from './authentification/authentification.component';
import {InfosRGPDComponent} from './inscription/infos-rgpd/infos-rgpd.component';
import {AccueilComponent} from './accueil/accueil.component';
import {RechercheComponent} from './recherche/recherche.component';
import { ProfilCompoComponent } from './profil-compo/profil-compo.component';

export const ROUTES: Routes = [
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: AuthentificationComponent},
  {path: 'gestion-donnees', component: InfosRGPDComponent},
  {path: 'recherche', component: RechercheComponent},
  {path: 'profil', component: ProfilCompoComponent},
  {path: '', component: AccueilComponent}
];
