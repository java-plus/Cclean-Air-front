import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification-service';

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

  /**
   *variable qui permet de gérer l'affichage du menu en mode mobile   *
   * @memberof MenuComponent
   */
  isCollapsed = true;

  /**
   * constructeur
   * @param {AuthentificationService} authentificationService
   * @memberof MenuComponent
   */
  constructor(private authentificationService: AuthentificationService) { }

  /**
   *Permet l'affichage de la partie administration du menu de navigation, uniquement si on est connecté en admin
   *
   * @memberof MenuComponent
   */
  ngOnInit() {
    this.authentificationService.isAdmin()
      .subscribe(
        () => { this.isAdmin = true; },
        () => { this.isAdmin = false; }
      )

  }

}
