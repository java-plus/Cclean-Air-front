import { Component } from '@angular/core';
import { Location } from '@angular/common';

/**
 * Composant gérant la page d'affichage des informations sur la gestion des données et les règles RGPD.
 */
@Component({
  selector: 'app-infos-rgpd',
  templateUrl: './infos-rgpd.component.html',
  styles: []
})
export class InfosRGPDComponent {

  /**
   * Constructeur
   * @param _location : Location
   */
  constructor(private _location: Location) { }
}
