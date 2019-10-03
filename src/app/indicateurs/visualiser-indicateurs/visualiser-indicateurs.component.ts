import { Component, OnInit } from '@angular/core';
import { IndicateursService } from 'src/app/services/indicateurs-service';
import { CommuneIndicateur } from 'src/app/entities/commune-indicateur';

@Component({
  selector: 'app-visualiser-indicateurs',
  templateUrl: './visualiser-indicateurs.component.html',
  styles: []
})
export class VisualiserIndicateursComponent implements OnInit {

  listeIndicateurs: CommuneIndicateur[];

  indicateurVide = true;

  affichageIndicateurs = true;

  suppressionIndicateur = false;

  creationIndicateur = false;

  communeSuppression: CommuneIndicateur;

  constructor(private indicateursService: IndicateursService) { }

  ngOnInit() {

    this.indicateursService.getListeIndicateurs()
      .subscribe((result) => {
        this.listeIndicateurs = result;
        if (this.listeIndicateurs.length > 0) {
          this.indicateurVide = false;
        }
      },
        err => { });
  }

  supprimerIndicateur(communeIndicateur: CommuneIndicateur) {
    this.affichageIndicateurs = false;
    this.suppressionIndicateur = true;
    this.communeSuppression = communeIndicateur;

  }


  annulationSuppressionIndicateur() {
    this.suppressionIndicateur = false;
    this.affichageIndicateurs = true;
  }

  confirmationSuppressionIndicateur(communeSuppression) {
    this.indicateursService.supprimerIndicateur(communeSuppression)
      .subscribe(() => { }, () => { });

  }
}
