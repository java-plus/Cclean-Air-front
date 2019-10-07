import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from '../services/historique-service';
import { Router } from '@angular/router';
import { HistoriqueDto } from '../entities/historiqueDto';
import { CommuneDtoVisualisation } from '../entities/CommuneDtoVisualisation';
import { PolluantDtoVisualisation } from '../entities/PolluantDtoVisualisation';
import { RechercheHistorique } from '../entities/rechercheHistorique';
import { Local } from 'protractor/built/driverProviders';
import { getLocaleDateFormat } from '@angular/common';
import { CommuneRecherche } from '../entities/CommuneRecherche';
import { ResultatRechercheCommune } from '../entities/ResultatRechercheCommune';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  communeDtoVisualisation = new CommuneDtoVisualisation('', null);
  polluantDtoVisualisation = new PolluantDtoVisualisation('', null, '');
  donneesHistorique = new HistoriqueDto(null, null);
  communeRecherche = new CommuneRecherche();
  rechercheHistorique = new RechercheHistorique(null, null, null, null, '');
  communeResultat = new ResultatRechercheCommune();

  listePolluants = [];
  error: string;
  affichageHistorique = false;

  constructor(private router: Router, private historiqueService: HistoriqueService, private dataService: DataService) { }
  /**
   * Ici on initialise la liste des polluants
   */
  ngOnInit() {
    this.dataService.recupererNomsPolluants().subscribe((polluants) => {
      polluants.forEach((polluant) => {
        this.listePolluants.push(polluant);
      });
    }, () => alert('Erreur lors de la récupération des données de polluants.'));
  }

  demanderHistorique() {
    console.log(this.rechercheHistorique);
    this.historiqueService.demanderHistorique('44001', this.rechercheHistorique)
      .subscribe(result => { this.affichageHistorique = true; }, (err: any) => {
        this.error = err;
      });
  }

}
