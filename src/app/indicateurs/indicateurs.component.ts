import { Component, OnInit } from '@angular/core';
import { IndicateurCreation } from '../entities/Indicateur-creation';

@Component({
  selector: 'app-indicateurs',
  templateUrl: './indicateurs.component.html',
  styles: []
})
export class IndicateursComponent implements OnInit {


  _etat = 0;

  constructor() { }
  indicateurCourant: IndicateurCreation;

  ngOnInit() {
  }

  get affichage(): number {
    return this._etat;
  }

  changerEtat(event:{etat:number,indicateurCourant: IndicateurCreation}) {
    this.indicateurCourant = event.indicateurCourant;
    this._etat = event.etat;

  }



}
