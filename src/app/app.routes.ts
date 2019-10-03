import { Routes } from '@angular/router';
import { InscriptionComponent } from "./inscription/inscription.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
import { InfosRGPDComponent } from "./inscription/infos-rgpd/infos-rgpd.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { IndicateursComponent } from './indicateurs/indicateurs.component';

export const ROUTES: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: AuthentificationComponent },
  { path: 'gestion-donnees', component: InfosRGPDComponent },
  { path: '', component: AccueilComponent },
  { path: 'indicateurs', component: IndicateursComponent }

];
