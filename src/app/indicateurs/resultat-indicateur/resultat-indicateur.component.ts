import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DonneesLocalesDto } from 'src/app/entities/DonneesLocalesDto';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommuneService } from 'src/app/services/commune-service';
import { CommuneIndicateur } from 'src/app/entities/commune-indicateur';
import { CommuneDtoVisualisation } from 'src/app/entities/CommuneDtovisualisation';
import { PolluantDtoVisualisation } from 'src/app/entities/PolluantDtoVisualisation';
import { ConditionMeteoDtoVisualisation } from 'src/app/entities/ConditionMeteoDtoVisualisation';

@Component({
  selector: 'app-resultat-indicateur',
  templateUrl: './resultat-indicateur.component.html',
  styles: []
})
export class ResultatIndicateurComponent implements OnInit {

  codeInsee: string;

  commune = new CommuneDtoVisualisation('', null);
  meteo = new ConditionMeteoDtoVisualisation(null, null, null);
  polluant: PolluantDtoVisualisation[] = [];


  donneesLocales: DonneesLocalesDto = new DonneesLocalesDto(this.commune,
    this.polluant, this.meteo, null);

  erreur: string;

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
  constructor(private route: ActivatedRoute, private communeService: CommuneService) { }

  /**
   * méthode qui initialise les résultats pour la commune lorsque l'on visualise un indicateur
   */
  ngOnInit() {
    this.route.paramMap.subscribe(() => {


      this.communeService.afficherDonneesLocales(this.indicateurCourant.codeInsee).subscribe(

        donnees => {

          this.donneesLocales = donnees;
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
