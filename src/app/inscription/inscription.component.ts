import {Component, OnInit} from '@angular/core';
import {UtilisateurInscription} from '../entities/utilisateur-inscription';
import {InscriptionService} from '../services/inscription-service';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {CommuneService} from "../services/commune-service";
import {Commune} from "../entities/commune";

/**
 * Composant gérant la page d'inscription.
 */
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styles: ['input.ng-dirty.ng-invalid {border-color: tomato}']
})
export class InscriptionComponent implements OnInit {

  champsInvalideMsg = 'Champ invalide.';
  motDePasseDeConfirmation: string;
  utilisateur: UtilisateurInscription = new UtilisateurInscription(null, null, null, null, ['MEMBRE'], null, null, false);
  isErreurCreation = false;
  isFormulaireValide = true;
  fonctionnalite = 'create';
  erreurMsg: string;
  isRGPDCoche: boolean;
  listeCommunes: Commune[];
  isErreurRecuperationCommunes: boolean;

  /**
   * Constructeur
   * @param inscriptionService : InscriptionService le service gérant les inscriptions
   * @param communeService : CommuneService
   */
  constructor(private inscriptionService: InscriptionService,
              private communeService: CommuneService) {
  }

  /**
   * Méthode de création d'un compte qui appelle la méthode dans le service d'inscription.
   */
  creerCompte(formInscription: NgForm) {
    if (formInscription.invalid || !this.isRGPDCoche) {
      this.isFormulaireValide = false;
      return;
    }
    this.inscriptionService.creerCompte(this.utilisateur).subscribe(
      () => {
        this.isFormulaireValide = true;
        this.isErreurCreation = false;
        this.fonctionnalite = 'read';
        this.utilisateur = new UtilisateurInscription(null, null, null, null, ['MEMBRE'], null, '', false);
      },
      (error: HttpErrorResponse) => {
        this.isFormulaireValide = true;
        this.erreurMsg = error.error;
        this.isErreurCreation = true;
      }
    );
  }

  /**
   * Affiche sur la page les informations sur la gestion des données.
   */
  afficherRGPD() {
    this.fonctionnalite = 'rgpd';
  }

  /**
   * Affiche sur la page le formulaire de création de compte.
   */
  retourAuClic() {
    this.fonctionnalite = 'create';
  }

  ngOnInit() {
    this.communeService.recupererCommunes()
      .subscribe(
        liste => {
          this.isErreurRecuperationCommunes = false;
          this.listeCommunes = liste;
        },
        () => this.isErreurRecuperationCommunes = true
      );
  }
}
