import {Component, OnInit} from '@angular/core';
import {UtilisateurInscription} from "../entities/utilisateurInscription";
import {InscriptionService} from "../services/inscription-service";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";

/**
 * Composant gérant la page d'inscription.
 */
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styles: ['input.ng-dirty.ng-invalid {border-color: tomato}']
})
export class InscriptionComponent {

  champsInvalideMsg: string = 'Champ invalide.';
  motDePasseDeConfirmation: string;
  utilisateur: UtilisateurInscription = new UtilisateurInscription(null, null, null, null, ['MEMBRE'], null, null, false);
  isErreurCreation: boolean = false;
  isFormulaireValide: boolean = true;
  fonctionnalite = 'create';
  erreurMsg: string;

  /**
   * Constructeur
   * @param inscriptionService : InscriptionService le service gérant les inscriptions
   */
  constructor(private inscriptionService: InscriptionService) {
  }

  /**
   * Méthode de création d'un compte qui appelle la méthode dans le service d'inscription.
   */
  creerCompte(formInscription: NgForm) {
    if(formInscription.invalid) {
      this.isFormulaireValide = false;
      return;
    }
    this.inscriptionService.creerCompte(this.utilisateur).subscribe(
      () => {
        this.isFormulaireValide = true;
        this.isErreurCreation = false;
        this.fonctionnalite = 'read';
        this.utilisateur = new UtilisateurInscription(null, null, null, null, ['MEMBRE'], null, null, false);
        },
      (error: HttpErrorResponse) => {
        this.erreurMsg = error.error;
        this.isErreurCreation = true;
      }
    );
  }

}
