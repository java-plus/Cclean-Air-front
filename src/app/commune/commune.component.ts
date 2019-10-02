import { Component, OnInit } from '@angular/core';
import { CommuneService } from '../services/commune-service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DonneesLocalesDto } from '../entities/DonneesLocalesDto';
/**
 * Classe qui permet de gérer le composant Commune
 */
@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {

  codeInsee: string = '44001';
  donneesLocales: DonneesLocalesDto;


  /**
   * constructeur
   * @param communeService
   */
  constructor(private route: ActivatedRoute, private communeService: CommuneService) { }

  ngOnInit() {

   // this.route.paramMap.subscribe((params: ParamMap) => {

      //this.codeInsee = params.get('codeInsee');

      this.communeService.afficherDonneesLocales(this.codeInsee).subscribe(

        donnees => {

          this.donneesLocales = donnees;
        }
      );

    // });
  }
}
