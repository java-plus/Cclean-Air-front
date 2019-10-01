import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/authentification-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  statutErreur: boolean;


  constructor(private service: AuthentificationService, private router: Router) {
  }


  ngOnInit() {
  }


  /**
   * Fait appel a la méthode de service pour lui envoyer les informations de connexion,
   * redirige vers la page de login ou l'accueil selon la réponse
   * @param email de l'utilisateur
   * @param motDePasse de l'utilisateur
   */
  authentifier(email: string, motDePasse: string): void {
    this.service.authentifier(email, motDePasse).subscribe(() => {
      this.router.navigate(['/recherche']);
    }, () => {
      this.router.navigate(['/connexion']);
      this.statutErreur = true;
    });
  }

}
