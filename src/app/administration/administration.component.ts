import {Component, OnInit} from '@angular/core';
import {MembreAdministration} from '../entities/membre-administration';
import {AdministrationService} from "../services/administration-service";

/**
 * Composant gérant la page d'administration (réservée aux utilisateurs avec
 * le statut administrateur).
 */
@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styles: []
})
export class AdministrationComponent implements OnInit {

  tableauDesMembres: MembreAdministration[];
  isErreurDeRecuperationDesMembres: boolean;
  erreurRecuperationMembresMsg: string;
  emailMembreASupprimer: string;
  fonctionnalite: string = 'read';

  constructor(private _administrationService: AdministrationService) {
  }

  /**
   * Méthode permettant de récupérer la liste des utilisateurs de l'API par
   * l'intermédiaire d'une méthode de service.
   */
  recupererMembres(): void {
    this._administrationService.recupererListeMembres().subscribe(
      (tableau) => this.tableauDesMembres = tableau,
      (error => {
        this.isErreurDeRecuperationDesMembres = true;
        this.erreurRecuperationMembresMsg = error.error;
      })
    )
  }

  demanderSuppression(emailDuMembre: string): void {
    this.emailMembreASupprimer = emailDuMembre;
    this.fonctionnalite = 'delete';
  }

  validerSuppression() {
    this._administrationService.supprimerMembre(this.emailMembreASupprimer);
  }

  ngOnInit(): void {
    this.recupererMembres();
  }

}
