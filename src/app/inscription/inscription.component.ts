import {Component, OnInit} from '@angular/core';
import {UtilisateurInscription} from '../entities/utilisateur-inscription';
import {InscriptionService} from '../services/inscription-service';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {DataService} from '../services/data.service';
import {Commune} from '../entities/commune';
import {CommuneCarte} from '../entities/CommuneCarte';


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

  /**
   * Constructeur
   * @param inscriptionService : InscriptionService le service gérant les inscriptions
   */
  constructor(private inscriptionService: InscriptionService, private dataService: DataService) {
  }

  /**
   * Méthode de création d'un compte qui appelle la méthode dans le service d'inscription.
   */
  creerCompte(formInscription: NgForm) {
    if (formInscription.invalid) {
      this.isFormulaireValide = false;
      return;
    }
    console.log(this.utilisateur);
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

  ngOnInit(): void {
    this.dataService.recupererCommunesAvecNiveauAlerte().subscribe((communes) => {
      this.listeCommunes = communes;
    });

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
