import {Component, OnInit} from '@angular/core';
import {UtilisateurInscription} from '../entities/utilisateur-inscription';
import {InscriptionService} from '../services/inscription-service';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {DataService} from '../services/data.service';
import {Commune} from '../entities/commune';
import {CommuneCarte} from '../entities/CommuneCarte';
import {CommuneService} from "../services/commune-service";


/**
 * Composant gérant la page d'inscription.
 */
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styles: ['input.ng-dirty.ng-invalid {border-color: tomato}']
})
export class InscriptionComponent implements OnInit {

  listeCommunes: Array<CommuneCarte>;
  communeSelectionne =  '';
  champsInvalideMsg = 'Champ invalide.';
  motDePasseDeConfirmation: string;
  utilisateur: UtilisateurInscription = new UtilisateurInscription(null, null, null, null, ['MEMBRE'], null, null, false);
  isErreurCreation = false;
  isFormulaireValide = true;
  fonctionnalite = 'create';
  erreurMsg: string;
  isRGPDCoche: boolean;
  isErreurRecuperationCommunes: boolean;

  /**
   * Constructeur
   * @param inscriptionService : InscriptionService le service gérant les inscriptions
   * @param communeService : CommuneService
   */
  constructor(private inscriptionService: InscriptionService, private dataService: DataService, private communeService: CommuneService) {
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


    this.dataService.recupererCommunesAvecNiveauAlerte().subscribe((communes) => {
      this.isErreurRecuperationCommunes = false;
      this.listeCommunes = communes;
    }, () => this.isErreurRecuperationCommunes = true);
  }

  modifierSelection(): void {
    this.listeCommunes.forEach(c => {
      if (c.nomCommune === this.communeSelectionne) {
        this.utilisateur.nomCommune = c.nomCommune;
        this.utilisateur.codePostal = c.codePostal;
      }
    });
  }
}
