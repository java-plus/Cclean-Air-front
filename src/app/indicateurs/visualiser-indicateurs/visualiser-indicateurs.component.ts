import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IndicateursService } from 'src/app/services/indicateurs-service';
import { CommuneIndicateur } from 'src/app/entities/commune-indicateur';
import { IndicateurCreation } from 'src/app/entities/Indicateur-creation';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  compteurIndicateurs = true;

  communeSuppression: CommuneIndicateur;

  ancienIndicateurEvent = fromEvent(document.getElementById('modif'), 'click');

  @Output() childEvent: EventEmitter<{etat: number, indicateurCourant: IndicateurCreation}> = new EventEmitter<{etat: number, indicateurCourant: IndicateurCreation}>();

  constructor(private indicateursService: IndicateursService) { }

  creerIndicateur() {
    this.childEvent.emit({etat:1,indicateurCourant:null});
  }

  modifierIndicateur(indicateur: IndicateurCreation) {

    this.indicateursService.modifAncienIndicateur(indicateur);
    this.childEvent.emit({etat: 2, indicateurCourant : indicateur});
  }



  ngOnInit() {

    this.indicateursService.getListeIndicateurs()
      .subscribe((result) => {
        this.listeIndicateurs = result;
        if (this.listeIndicateurs.length > 0) {
          this.indicateurVide = false;
        }
        if (this.listeIndicateurs.length >= 5) {
          this.compteurIndicateurs = false;
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

  confirmationSuppressionIndicateur() {
    console.log(this.communeSuppression)
    this.indicateursService.supprimerIndicateur(this.communeSuppression.nomCommune)
      .subscribe((result) => {


        this.suppressionIndicateur = false;
        this.affichageIndicateurs = true;

        this.indicateursService.getListeIndicateurs()
          .subscribe((result) => {
            this.listeIndicateurs = result;
            if (this.listeIndicateurs.length > 0) {
              this.indicateurVide = false;
            }
            if (this.listeIndicateurs.length >= 5) {
              this.compteurIndicateurs = false;
            } else {
              this.compteurIndicateurs = true;
            }
          },
            err => { });

      }, (err) => {
      });
  }



}
