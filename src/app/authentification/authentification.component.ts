import {Component} from '@angular/core';
import {AuthentificationService} from '../services/authentification-service';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";
import {UtilisateurAuthentification} from "../entities/utilisateur-authentification";

/**
 * Composant gérant la page d'authentification.
 */
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styles: []
})
export class AuthentificationComponent {

  statutErreur: boolean;
  utilisateur: UtilisateurAuthentification = new UtilisateurAuthentification(null, null);

  /**
   * Constructeur
   * @param service : AuthentificationService
   * @param router : Router
   */
  constructor(private service: AuthentificationService, private router: Router) {
  }

  /**
   * Fait appel a la méthode de service pour lui envoyer les informations de connexion,
   * redirige vers la page de login ou l'accueil (la page de recherche) selon la réponse.
   * @param formAuthentification
   */
  authentifier(formAuthentification: NgForm): void {
    if (formAuthentification.invalid) {
      this.statutErreur = true;
      return;
    }
    this.service.authentifier(this.utilisateur).subscribe(() => {
      this.router.navigate(['/recherche']);
    }, () => {
      this.router.navigate(['/connexion']);
      this.statutErreur = true;
    });
  }
}
