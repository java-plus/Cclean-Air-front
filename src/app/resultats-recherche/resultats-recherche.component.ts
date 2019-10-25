import { Component, OnInit } from "@angular/core";
import { ResultatRechercheCommune } from "../entities/ResultatRechercheCommune";
import { ActivatedRoute, RouterLink, Router } from "@angular/router";
import { DataService } from "../services/data.service";
import { CommuneRecherche } from "../entities/CommuneRecherche";

@Component({
  selector: "app-resultats-recherche",
  templateUrl: "./resultats-recherche.component.html",
  styleUrls: []
})
export class ResultatsRechercheComponent implements OnInit {
  erreur: string;
  icon: string;
  codeInsee: string;

  constructor(
    private service: DataService,
    private activatedroute: ActivatedRoute, private router: Router
  ) { }

  public communeResultat = new ResultatRechercheCommune();
  public communeRecherche = new CommuneRecherche();

  ngOnInit() {
    this.activatedroute.queryParams.subscribe(
      params => {
        this.communeRecherche.codeEtNom = {
          nomCommune: params.nom,
          codeInsee: params.code
        };
        this.communeRecherche.polluant = params.polluant;
        this.communeRecherche.date = params.date;
        this.communeRecherche.heure = params.heure;
        this.communeRecherche.alerte = params.alerte;

        this.service
          .recupererDonneesCommune(this.communeRecherche)
          .subscribe(commune => {
            this.communeResultat = commune;

            if (this.communeResultat.meteo.humidite > 66) {
              this.icon = "http://openweathermap.org/img/wn/09d@2x.png";
            } else {
              this.icon = "http://openweathermap.org/img/wn/02d@2x.png";
            }
            if (this.communeResultat.meteo.ensoleillement > 66) {
              this.icon = "http://openweathermap.org/img/wn/01d@2x.png";
            }

            if (this.communeResultat == null) {
              this.erreur = "Désolés, nous n'avons pas de données pour cette recherche"
            }
          },
            err => {
              this.erreur = err.error;
            });
      }
    );
  }

  retourRecherche() {
    this.router.navigate(["/recherche"]);
  }
}
