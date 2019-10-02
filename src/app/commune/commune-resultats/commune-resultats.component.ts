import { Component, OnInit } from '@angular/core';
import { DonneesLocalesDto } from 'src/app/entities/DonneesLocalesDto';
import { ActivatedRoute } from '@angular/router';
import { CommuneService } from 'src/app/services/commune-service';
/**
 * Classe de service qui gère l'affichage des résultats pour une commune
 */
@Component({
  selector: 'app-commune-resultats',
  templateUrl: './commune-resultats.component.html',
  styleUrls: ['./commune-resultats.component.css']
})
export class CommuneResultatsComponent implements OnInit {

  codeInsee = '44001';
  donneesLocales: DonneesLocalesDto = new DonneesLocalesDto(null, null, null, null);
  erreur: string;


  /**
   * constructeur
   * @param communeService
   */
  constructor(private route: ActivatedRoute, private communeService: CommuneService) { }

  /**
   * méthode qui initialise les résultats pour la commune lorsque l'on visualise un indicateur
   */
  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {

    //this.codeInsee = params.get('codeInsee');

    this.communeService.afficherDonneesLocales(this.codeInsee).subscribe(

      donnees => {

        this.donneesLocales = donnees;
      }, err => {
        this.erreur = err.error;

      }
    );

    // });
  }

}
