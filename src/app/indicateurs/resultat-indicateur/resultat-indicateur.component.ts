import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DonneesLocalesDto } from 'src/app/entities/DonneesLocalesDto';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommuneService } from 'src/app/services/commune-service';
import { CommuneIndicateur } from 'src/app/entities/commune-indicateur';
import { CommuneDtoVisualisation } from 'src/app/entities/CommuneDtovisualisation';
import { PolluantDtoVisualisation } from 'src/app/entities/PolluantDtoVisualisation';
import { ConditionMeteoDtoVisualisation } from 'src/app/entities/ConditionMeteoDtoVisualisation';
import { NotificationService } from 'src/app/services/notification.service';
import { CommuneAlerte } from 'src/app/entities/commune-alerte';

@Component({
  selector: 'app-resultat-indicateur',
  templateUrl: './resultat-indicateur.component.html',
  styles: []
})
export class ResultatIndicateurComponent implements OnInit {

  codeInsee: string;

  icon: string;

  commune = new CommuneDtoVisualisation('', null);
  meteo = new ConditionMeteoDtoVisualisation(null, null, null);
  polluant: PolluantDtoVisualisation[] = [];


  donneesLocales: DonneesLocalesDto = new DonneesLocalesDto(this.commune,
    this.polluant, this.meteo, null);

  erreur: string;

  listeCommuneAlertes: CommuneAlerte[] = [];

  alerte = false;

  listePolluantsAlerte: string[] = [];

  /**
  * indicateur à modifier récupérer depuis la page de visualisation
  */
  @Input() indicateurCourant: CommuneIndicateur;

  /**
   * variable qui permet de gérer l'affichage
   */
  @Output() childResultat: EventEmitter<{
    etat: number;
    indicateurCourant: CommuneIndicateur;
  }> = new EventEmitter<{
    etat: number;
    indicateurCourant: CommuneIndicateur;
  }>();

  /**
   * constructeur
   * @param communeService
   */
  constructor(private route: ActivatedRoute, private communeService: CommuneService, private notificationService: NotificationService) { }

  /**
   * méthode qui initialise les résultats pour la commune lorsque l'on visualise un indicateur
   */
  ngOnInit() {
    this.route.paramMap.subscribe(() => {


      this.communeService.afficherDonneesLocales(this.indicateurCourant.codeInsee).subscribe(

        donnees => {

          this.donneesLocales = donnees;


          if (this.donneesLocales.conditionMeteo.humidite > 66) {
            this.icon = 'http://openweathermap.org/img/wn/09d@2x.png';
          } else {
            this.icon = 'http://openweathermap.org/img/wn/02d@2x.png';
          }
          if (this.donneesLocales.conditionMeteo.ensoleillement > 66) {
            this.icon = 'http://openweathermap.org/img/wn/01d@2x.png';
          }

          this.notificationService.recupererAlertesPollutionPourTousIndicateurs()
            .subscribe(
              data => {
                this.listeCommuneAlertes = data;
                if (this.listeCommuneAlertes != null) {
                  this.listeCommuneAlertes.forEach(commune => {
                    if (commune.nomCommune === this.donneesLocales.commune.nom) {
                      this.alerte = true;
                      this.listePolluantsAlerte.push(commune.nomPolluant);
                    }
                  });
                }
              }
            );

        }, err => {
          this.erreur = err.error;

        }
      );

    });
  }

  /**
   * méthode qui permet de retourner à l'affichage des indicateurs
   */
  retourIndicateur() {
    this.childResultat.emit({ etat: 0, indicateurCourant: null });
  }

}
