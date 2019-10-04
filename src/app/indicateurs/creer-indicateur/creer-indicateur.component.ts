import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Commune } from 'src/app/entities/Commune';
import { IndicateursService } from 'src/app/services/indicateurs-service';
import { IndicateurCreation } from 'src/app/entities/Indicateur-creation';

@Component({
  selector: 'app-creer-indicateur',
  templateUrl: './creer-indicateur.component.html',
  styles: ['']
})
export class CreerIndicateurComponent implements OnInit {

  listeCommunes = ['Abbaretz', 'Aigrefeuille-sur-Maine', 'Ancenis-Saint-Géréon', 'Chaumes-en-Retz',
    'Assérac', 'Avessac', 'Basse-Goulaine', 'Batz-sur-Mer', 'La Bernerie-en-Retz', 'Besné'];

  indicateurCreation: IndicateurCreation = new IndicateurCreation('', null);

  @Output() childCrea: EventEmitter<number> = new EventEmitter<number>();

  constructor(private dataService: DataService, private indicateursService: IndicateursService) { }

  ngOnInit() {

  }

  creerIndicateur(indicateurCreation: IndicateurCreation) {
    if (indicateurCreation.alerte == null) {
      indicateurCreation.alerte = false;
    }
    this.indicateursService.enregistrerIndicateur(indicateurCreation)
      .subscribe(
        () => {

          this.childCrea.emit(0);
        }, err => {
        }
      )

  }

}
