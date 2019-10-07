import {Component, OnInit} from '@angular/core';
import {ResultatRechercheCommune} from '../entities/ResultatRechercheCommune';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../services/data.service';
import {CommuneRecherche} from '../entities/CommuneRecherche';

@Component({
  selector: 'app-resultats-recherche',
  templateUrl: './resultats-recherche.component.html',
  styleUrls: []
})
export class ResultatsRechercheComponent implements OnInit {

  constructor(private service: DataService, private activatedroute: ActivatedRoute) {
  }

  public communeResultat = new ResultatRechercheCommune();
  public communeRecherche = new CommuneRecherche();

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params => {

      this.communeRecherche.codeEtNom = {nomCommune: params.nom, codeInsee: params.code};
      this.communeRecherche.polluant = params.polluant;
      this.communeRecherche.date = params.date;
      this.communeRecherche.heure = params.heure;
      this.communeRecherche.alerte = params.alerte;


      this.service.recupererDonneesCommune(this.communeRecherche).subscribe((commune) => {
        this.communeResultat = commune;

      });
    });


  }

}
