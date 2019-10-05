import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { IndicateurCreation } from "src/app/entities/Indicateur-creation";
import { IndicateursService } from "src/app/services/indicateurs-service";
import { CommuneIndicateur } from "src/app/entities/commune-indicateur";

/**
 * Classe qui gère la modification d'un indicateur
 */
@Component({
  selector: "app-modifier-indicateur",
  templateUrl: "./modifier-indicateur.component.html",
  styles: []
})
export class ModifierIndicateurComponent implements OnInit {
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

  indicateurModification: IndicateurCreation = new IndicateurCreation("", null);

  ancienIndicateur: IndicateurCreation;

  /**
   * indicateur à modifier récupérer depuis la page de visualisation
   */
  @Input() indicateurCourant: CommuneIndicateur;

  /**
   * variable qui permet de gérer l'affichage
   */
  @Output() childModif: EventEmitter<{
    etat: number;
    indicateurCourant: CommuneIndicateur;
  }> = new EventEmitter<{
    etat: number;
    indicateurCourant: CommuneIndicateur;
  }>();

  /**
   * constructeur
   * @param indicateursService
   */
  constructor(private indicateursService: IndicateursService) {}

  ngOnInit() {}

  /**
   * méthode qui permet de revenir à l'affichage des indicateurs
   */
  retourIndicateur() {
    this.childModif.emit({ etat: 0, indicateurCourant: null });
  }

  /**
   * méthode qui permet de modifier un indicateur
   * @param indicateurModification
   */
  modifierIndicateur(indicateurModification: IndicateurCreation) {
    if (indicateurModification.alerte == null) {
      indicateurModification.alerte = false;
    }

    this.indicateursService
      .modifierIndicateur(
        indicateurModification,
        this.indicateurCourant.nomCommune
      )
      .subscribe(
        () => {
          this.childModif.emit({ etat: 0, indicateurCourant: null });
        },
        err => {}
      );
  }
}
