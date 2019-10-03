import {Component, OnInit} from '@angular/core';
import {MembreAdministration} from '../entities/membre-administration';
import {AdministrationService} from '../services/administration-service';

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
  isErreurSuppressionMembre: boolean;
  erreurRecuperationMembresMsg: string;
  emailMembreASupprimer: string;
  fonctionnalite = 'read';
  erreurSuppressionMembreMsg: string;

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
    );
  }

  /**
   * Méthode pour afficher la demande de confirmation de suppression du membre.
   * @param emailDuMembre : string l'email du membre à supprimer
   */
  demanderSuppression(emailDuMembre: string): void {
    this.emailMembreASupprimer = emailDuMembre;
    this.fonctionnalite = 'delete';
    this.isErreurSuppressionMembre = false;
    this.erreurSuppressionMembreMsg = undefined;
  }

  /**
   * Méthode appellant le service pour supprimer un membre.
   */
  validerSuppression(): void {
    this._administrationService.supprimerMembre(this.emailMembreASupprimer).subscribe(
      () => {
        this.isErreurSuppressionMembre = false;
        this.erreurSuppressionMembreMsg = undefined;
        this.recupererMembres();
        this.fonctionnalite = 'read';
      },
      (error => {
        this.isErreurSuppressionMembre = true;
        this.erreurSuppressionMembreMsg = error.error;
      })
    );
  }

  /**
   * Méthode lancée à l'initialisation : ici récupération de la liste des
   * membres.
   */
  ngOnInit(): void {
    this.recupererMembres();
  }

}
