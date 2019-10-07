import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification-service';
import {DeconnexionService} from '../services/deconnexion-service';
import {Router} from '@angular/router';

/**
 * Composant qui gère l'affichage de la barre de navigation
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  isAdmin: boolean;
  isErreurDeconnexion = false;
  erreurDeconnexionMsg: string;

  /**
   * Variable qui permet de gérer l'affichage du menu en mode mobile.
   */
  isCollapsed = true;

  /**
   * Constructeur
   * @param authentificationService : AuthentificationService
   * @param deconnexionService : DeconnexionService
   * @param router : Router
   */
  constructor(private authentificationService: AuthentificationService,
              private deconnexionService: DeconnexionService,
              private router: Router) { }

  /**
   * Méthode sollicitant le service de deconnexion pour déconnecter
   * l'utilisateur.
   */
  deconnecter(): void {
    this.deconnexionService.deconnecterUtilisateur().subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error => {
        this.isErreurDeconnexion = true;
        this.erreurDeconnexionMsg = error.error;
      })

    );
  }

  /**
   * Permet l'affichage de la partie administration du menu de navigation,
   * uniquement si on est connecté en admin
   */
  ngOnInit(): void {
    this.authentificationService.isAdmin()
      .subscribe(
        (value: boolean) => {
          this.isAdmin = value;
        }
      );

  }

}
