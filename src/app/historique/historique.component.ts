import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DonneesLocalesHistorique } from '../entities/DonneesLocalesHistorique';
import { DonneesLocalesRecherchees } from '../entities/DonneesLocalesRecherchees';
import { CommuneDtoVisualisation } from '../entities/CommuneDtovisualisation';
import { ConditionMeteoDtoVisualisation } from '../entities/ConditionMeteoDtoVisualisation';
import { PolluantDtoVisualisation } from '../entities/PolluantDtoVisualisation';
import { DonneesLocalesDto } from '../entities/DonneesLocalesDto';
import { CommuneService } from '../services/commune-service';
import { PolluantService } from '../services/polluant-service';
import { NgForm } from '@angular/forms';
import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styles: []
})
export class HistoriqueComponent implements OnInit {

  @ViewChild("lineCanvas", { static: false }) lineCanvas: ElementRef;

  @ViewChild("formulaire", { static: false }) formulaire: NgForm;

  codeInsee: string;

  lineChart: Chart;

  donneesHistorique: DonneesLocalesHistorique[] = [];

  myDate = new Date().toISOString().substr(0, 10);

  date = new Date();

  datePassee = new Date();

  myLastDate: string;

  donneesRecherchees = new DonneesLocalesRecherchees(null, null, "");
  commune = new CommuneDtoVisualisation("", null);
  meteo = new ConditionMeteoDtoVisualisation(null, null, null);
  polluant: PolluantDtoVisualisation[] = [];

  unite = "";

  donneesLocales: DonneesLocalesDto = new DonneesLocalesDto(
    this.commune,
    this.polluant,
    this.meteo,
    null
  );

  listePolluants: string[];

  affichageFormulaire = true;

  dataTab: number[] = [];

  labels: string[] = [];

  polluantVide = false;

  nomPolluant: string;

  donnneesVides = false;

  erreur: string;

  constructor(private route: ActivatedRoute,
    private communeService: CommuneService,
    private polluantService: PolluantService,
    private datepipe: DatePipe) {
    this.codeInsee = route.snapshot.paramMap.get("codeInsee");
  }

  ngOnInit() {

    this.datePassee.setDate(this.date.getDate() - 7);
    this.myLastDate = this.datePassee.toISOString().substr(0, 10);

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.codeInsee = params.get("codeInsee");

      this.communeService
        .afficherDonneesLocales(this.codeInsee)
        .subscribe(donnees => {
          this.donneesLocales = donnees;
        });


      this.polluantService.recupererPolluant().subscribe(donnees => {
        this.listePolluants = donnees;
      });



    });

  }

  /**
 *Méthode qui récupère l'historique en appelant le back, et qui le renvoie sous forme de graphique, puis reset le formulaire
 *
 * @memberof HistoriqueCommunePage
 */
  rechercheHistorique() {
    if (this.donneesRecherchees.dateDebut > this.donneesRecherchees.dateFin) {
      this.erreur = "Veuillez vérifier les dates saisies";
    } else {

      if (this.lineChart) {
        this.lineChart.destroy();
        this.dataTab = [];
        this.labels = [];
      }
      this.erreur = null;
      this.polluantVide = false;
      this.donneesRecherchees.dateDebut = this.donneesRecherchees.dateDebut.concat('T00:00:00.000+02:00');
      this.donneesRecherchees.dateFin = this.donneesRecherchees.dateFin.concat('T23:59:00.000+02:00');
      this.communeService
        .afficherHistorique(this.codeInsee, this.donneesRecherchees)
        .subscribe(
          donnees => {
            this.donneesHistorique = donnees;

            this.donneesHistorique.forEach(element => {
              if (element.polluantDtoVisualisation.nom === null) {
                this.polluantVide = true;
              } else {
                this.nomPolluant = element.polluantDtoVisualisation.nom;
                this.polluantVide = false;
              }
              this.unite = element.polluantDtoVisualisation.unite;

              this.dataTab.push(element.polluantDtoVisualisation.valeur);
              const dateFormatee = this.datepipe.transform(
                element.date,
                "dd-MM-yyyy HH:mm"
              );
              this.labels.push(dateFormatee);






              this.lineChart = new Chart(this.lineCanvas.nativeElement, {
                type: "line",
                data: {
                  labels: this.labels,
                  datasets: [
                    {
                      label: this.donneesRecherchees.polluant,
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(75,192,192,1)",
                      borderCapStyle: "butt",
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: "miter",
                      pointBorderColor: "rgba(75,192,192,1)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: this.dataTab,
                      spanGaps: false
                    }
                  ]
                },
                options: {
                  legend: {
                    display: false
                  },
                  tooltips: {
                    callbacks: {
                      label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                      }
                    }
                  }
                }
              });
            });
            if (this.polluantVide === false) {
              this.affichageFormulaire = false;
            }
            if (this.donneesHistorique.length == 0) {
              this.affichageFormulaire = true;
              this.donnneesVides = true;
              this.erreur =
                "Il n'y a pas de données pour les dates et polluant choisis";
            }
            this.formulaire.resetForm();

          },
          err => {
            this.erreur = err.error;
          }
        );
    }
  }


}
