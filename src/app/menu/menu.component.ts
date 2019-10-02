import { Component, OnInit } from '@angular/core';

/**
 * Classe qui gère l'affichage de la barre de navigation
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  /**
   *variable qui permet de gérer l'affichage du menu en mode mobile   *
   * @memberof MenuComponent
   */
  isCollapsed = true;

  /**
   * constructeur
   */
  constructor() { }

  ngOnInit() {
  }

}
