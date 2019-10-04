import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IndicateurCreation } from 'src/app/entities/Indicateur-creation';
import { IndicateursService } from 'src/app/services/indicateurs-service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-modifier-indicateur',
  templateUrl: './modifier-indicateur.component.html',
  styles: []
})
export class ModifierIndicateurComponent implements OnInit {

  listeCommunes = ['Abbaretz', 'Aigrefeuille-sur-Maine', 'Ancenis-Saint-Géréon', 'Chaumes-en-Retz',
    'Assérac', 'Avessac', 'Basse-Goulaine', 'Batz-sur-Mer', 'La Bernerie-en-Retz', 'Besné'];

  indicateurModification: IndicateurCreation = new IndicateurCreation('', null);

  ancienIndicateur: IndicateurCreation;



  @Input() indicateurCourant: IndicateurCreation;

  @Output() childModif: EventEmitter<number> = new EventEmitter<number>();


  constructor(private indicateursService: IndicateursService) { }

  ngOnInit() {
    this.indicateursService.subAncienIndicateur
      .subscribe(
        data => {
          console.log(data)
          this.ancienIndicateur = data;
        }, (err) => { console.log(err) }
      )

  }

  retourIndicateur() {
    this.childModif.emit(0);
  }

  modifierIndicateur(indicateurModification: IndicateurCreation) {
    if (indicateurModification.alerte == null) {
      indicateurModification.alerte = false;
    }

    this.indicateursService.modifierIndicateur(indicateurModification, this.indicateurCourant)
      .subscribe(
        () => { }, err => {


        }
      )







  }

}
