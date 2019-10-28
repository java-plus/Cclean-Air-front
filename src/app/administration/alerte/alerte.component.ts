import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Commune} from '../../entities/commune';
import {AlerteAdministrateur} from '../../entities/alerte-administeur';
import {NgForm} from '@angular/forms';
import {AdministrationService} from '../../services/administration-service';
import {Router} from "@angular/router";

/**
 * Composant gérant la page de création et d'envoi d'une alerte aux membres
 * pour les administrateurs.
 */
@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styles: []
})
export class AlerteComponent implements OnInit {
  communes: Commune[];
  isErreurRecuperationCommunes: boolean;
  erreurRecuperationCommunesMsg: boolean;
  isErreurFormulaire: boolean;
  isErreurAlerte: boolean;
  erreurAlerteMsg: string;
  isAlerteEnvoyee: boolean;
  alerte = new AlerteAdministrateur(null, null, null);

  /**
   * Constructeur
   * @param _dataService : DataService
   * @param _administrationService : AdministrationService
   * @param router : Router
   */
  constructor(private _dataService: DataService,
              private _administrationService: AdministrationService,
              private router: Router) {
  }

  /**
   * Méthode affectant la valeur du select (commune insee) à l'alerte.
   * @param value
   */
  onChangeSelect(value) {
    this.alerte.communeInsee = value;
  }

  /**
   * Méthode sollicitant le service d'administration pour envoyer une
   * requête post avec l'alerte à l'API.
   * @param formAlerte : NgForm
   */
  envoyerAlerte(formAlerte: NgForm) {
    if (formAlerte.invalid) {
      this.isErreurFormulaire = true;
    } else {
      this.isErreurFormulaire = false;
      this._administrationService.envoyerAlerte(this.alerte).subscribe(
        () => {
          this.isAlerteEnvoyee = true;
          this.router.navigate(['/admin']);
        },
        (error => {
          this.isErreurAlerte = true;
          this.erreurAlerteMsg = error.error;
        })
      );
    }
  }

  /**
   * Méthode permettant la récupération des communes au lancemement du
   * composant.
   */
  ngOnInit(): void {
    this._dataService.recupererCommunes().subscribe(
      (tableauCommunes => this.communes = tableauCommunes),
      (error => {
        this.isErreurRecuperationCommunes = true;
        this.erreurRecuperationCommunesMsg = error;
      })
    );
  }

}
