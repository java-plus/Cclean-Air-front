import {Routes} from '@angular/router';
import {AppComponent} from './src/app/app.component';
import {AuthentificationComponent} from './src/app/authentification/authentification.component';
import {RechercheComponent} from './src/app/recherche/recherche.component';

export const ROUTES: Routes = [
  {path: '', component: AppComponent},
  {path: 'connexion', component: AuthentificationComponent},
  {path: 'recherche', component: RechercheComponent}
];
