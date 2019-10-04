import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modifier-indicateur',
  templateUrl: './modifier-indicateur.component.html',
  styles: []
})
export class ModifierIndicateurComponent implements OnInit {


  @Output() childModif: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  retourIndicateur() {
    this.childModif.emit(0);
  }

}
