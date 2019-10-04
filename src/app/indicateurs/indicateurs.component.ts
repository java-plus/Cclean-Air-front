import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicateurs',
  templateUrl: './indicateurs.component.html',
  styles: []
})
export class IndicateursComponent implements OnInit {


  _etat = 0;

  constructor() { }

  ngOnInit() {
  }

  get affichage(): number {
    return this._etat;
  }

  changerEtat(event) {
    this._etat = event;


  }



}
