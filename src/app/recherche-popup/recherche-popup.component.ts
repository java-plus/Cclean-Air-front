import {Component, Input, OnInit} from '@angular/core';
import {CommuneCarte} from '../entities/CommuneCarte';
import {CommuneRecherche} from '../entities/CommuneRecherche';

@Component({
  selector: 'app-recherche-popup',
  templateUrl: './recherche-popup.component.html',
  styleUrls: []
})
export class RecherchePopupComponent implements OnInit {

   @Input() commune: CommuneCarte;


  queryParamsCommune: any;

  constructor() { }

  ngOnInit() {


  }


}
