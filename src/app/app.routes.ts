import {Routes} from '@angular/router';
import {InscriptionComponent} from "./inscription/inscription.component";
import {AuthentificationComponent} from "./authentification/authentification.component";

export const ROUTES: Routes = [
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: AuthentificationComponent},
  {path: '', component: AuthentificationComponent}
];
