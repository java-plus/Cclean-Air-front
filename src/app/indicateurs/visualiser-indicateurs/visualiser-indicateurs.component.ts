import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  compteurIndicateurs = true;

  communeSuppression: CommuneIndicateur;

  @Output() childEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private indicateursService: IndicateursService) { }

  creerIndicateur() {
    this.childEvent.emit(1);
  }

  modifierIndicateur() {
    this.childEvent.emit(2);
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
        console.log(err);
      });
  }



}
