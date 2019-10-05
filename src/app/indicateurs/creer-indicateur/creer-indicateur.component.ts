import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { IndicateursService } from "src/app/services/indicateurs-service";
import { IndicateurCreation } from "src/app/entities/Indicateur-creation";
import { CommuneIndicateur } from "src/app/entities/commune-indicateur";

/**
 * Classe qui gère la création d'un indicateur
 */
@Component({
  selector: "app-creer-indicateur",
  templateUrl: "./creer-indicateur.component.html",
  styles: [""]
})
export class CreerIndicateurComponent implements OnInit {
  /**
   * liste des communes pour lesquelles les infos sont en base
   */
  listeCommunes = [
    "Abbaretz",
    "Aigrefeuille-sur-Maine",
    "Ancenis-Saint-Géréon",
    "Chaumes-en-Retz",
    "Assérac",
    "Avessac",
    "Basse-Goulaine",
    "Batz-sur-Mer",
    "La Bernerie-en-Retz",
    "Besné"
  ];

  indicateurCreation: IndicateurCreation = new IndicateurCreation("", null);

  /**
   * variable qui permet de changer l'affichage
   */
  @Output() childCrea: EventEmitter<{
    etat: number;
    indicateurCourant: CommuneIndicateur;
  }> = new EventEmitter<{
    etat: number;
    indicateurCourant: CommuneIndicateur;
  }>();

  /**
   * constructeur
   * @param dataService
   * @param indicateursService
   */
  constructor(
    private dataService: DataService,
    private indicateursService: IndicateursService
  ) {}

  ngOnInit() {}

  /**
   * méthode qui permet de créer un indicateur
   * @param indicateurCreation
   */
  creerIndicateur(indicateurCreation: IndicateurCreation) {
    if (indicateurCreation.alerte == null) {
      indicateurCreation.alerte = false;
    }
    this.indicateursService.enregistrerIndicateur(indicateurCreation).subscribe(
      () => {
        this.childCrea.emit({ etat: 0, indicateurCourant: null });
      },
      err => {}
    );
  }
}
