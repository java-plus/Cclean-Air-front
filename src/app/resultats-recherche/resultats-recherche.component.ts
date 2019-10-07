import { Component, OnInit } from '@angular/core';
import {ResultatRechercheCommune} from '../entities/ResultatRechercheCommune';
import {ResultatsService} from '../services/resultats.service';

@Component({
  selector: 'app-resultats-recherche',
  templateUrl: './resultats-recherche.component.html',
  styleUrls: []
})
export class ResultatsRechercheComponent implements OnInit {

  constructor(private service: ResultatsService) { }

  public commune: ResultatRechercheCommune;

  ngOnInit() {
  }

}
