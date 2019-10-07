import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DataService } from '../services/data.service';
import { CommuneRecherche } from '../entities/CommuneRecherche';
import { ResultatRechercheCommune } from '../entities/ResultatRechercheCommune';
import { CommuneCarte } from '../entities/CommuneCarte';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


/**
 * Composant gérant la page de recherche des informations météorologiques d'une
 * commune.
 */
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  public listeCommunes: Array<CommuneCarte> = [];
  public listePolluants = [];

  public communeRecherche: CommuneRecherche = new CommuneRecherche();
  public communeResultat: ResultatRechercheCommune = new ResultatRechercheCommune();

  isErreurFormulaire: boolean;
  isErreurRecuperationDonnees: boolean;
  erreurRecuperationDonneesMsg: string;

  /**
   * Constructeur
   * @param service : DataService
   * @param router : Router
   */
  constructor(private service: DataService, private router: Router) { }

  /**
   * Méthode appellant la méthode de récupération des données
   * météorologiques de la commune saisie dans le champs de recherche détaillée.
   */
  rechercheDetaillee(formRecherche: NgForm): void {
    if (formRecherche.invalid || (this.communeRecherche.heure !== undefined && !this.communeRecherche.date) || (this.communeRecherche.heure === undefined && this.communeRecherche.date)) {
      this.isErreurFormulaire = true;
      this.isErreurRecuperationDonnees = false;
    } else {
      if (this.communeRecherche.date === undefined) {
        this.communeRecherche.date = new Date();
        this.communeRecherche.heure = 0;
      }
      this.isErreurRecuperationDonnees = false;
      this.isErreurFormulaire = false;
      this.service.recupererDonneesCommune(this.communeRecherche).subscribe((commune) => {
        this.communeResultat = commune;
      },
        error => {
          this.isErreurRecuperationDonnees = true;
          this.erreurRecuperationDonneesMsg = error.error;
        });
    }
  }

  ngOnInit(): void {

    /**
     * On initialise la carte et ses données dès le chargement de la page.
     * On centre la carte sur les coordonnées de Nantes avec un zoom de 10
     */
    const map = L.map('map_recherche').setView([47.218371, -1.553621], 10);

    /**
     * Titre de la carte
     */
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Carte de la qualité de l\'air',
    }).addTo(map);

    /**
     * Définition de l'icone
     */
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
      iconSize: [32, 32],
      iconAnchor: [32, 32]
    });

    /**
     * On récupère les données puis on crée un marqueur pour chaque donnée récupérée.
     */
    this.service.recupererCommunesAvecNiveauAlerte().subscribe((communes) => {
      communes.forEach((commune) => {
        /**
         * On alimente la liste des communes
         */
        this.listeCommunes.push(commune);

        /**
         * Le contenu des popup de chaque marqueur
         */
        const content = `
    <u>
        <b>${commune.nomCommune}</b>
    </u>
    <br/>
    <p>${commune.codePostal}</p>`;

        /**
         * Le statut d'alerte de chaque commune
         */
        let alerte = '';

        if (commune.alerte != null) {
          alerte = `<br/><p class = "text-danger"> Alerte pollution :</p><br/> <p>  ${commune.alerte.nomPolluant} :
           ${commune.alerte.valeur} microg/m3.`;

        } else {
          alerte = `<br><p class = "text-success">Aucune alerte pollution.</p>`;
        }

        L.marker([commune.latitude, commune.longitude], { icon: myIcon }).bindPopup(content.concat(alerte)).addTo(map);


      });
    }, () => {
      alert('Erreur lors de la récupération des communes');
    });

    /**
     * Ici on initialise la liste des polluants
     */
    this.service.recupererNomsPolluants().subscribe((polluants) => {
      polluants.forEach((polluant) => {
        this.listePolluants.push(polluant);
      });
    }, () => alert('Erreur lors de la récupération des données de polluants.'));
  }

}
