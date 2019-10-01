import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styles: ['input.ng-dirty.ng-invalid {border-color: tomato}']
})
export class InscriptionComponent implements OnInit {

  champsInvalideMsg: string = 'Champ invalide.';

  constructor() { }

  ngOnInit() {
  }

}
