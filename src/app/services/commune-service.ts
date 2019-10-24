import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { DonneesLocalesDto } from '../entities/DonneesLocalesDto';
import { tap, catchError, map } from 'rxjs/operators';
import { DonneesLocalesRecherchees } from '../entities/DonneesLocalesRecherchees';
import { DonneesLocalesHistorique } from '../entities/DonneesLocalesHistorique';
const URL_BACKEND = environment.backendUrl;

/**
 * Classe de service pour la commune
 */
@Injectable({
  providedIn: 'root'
})
export class CommuneService {


  private subDonneesLocales = new Subject<DonneesLocalesDto>();

  get subCollegueObs(): Observable<DonneesLocalesDto> {
    return this.subDonneesLocales.asObservable()
  }

  /**
   * constructeur
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * méthode qui récupère l'objet donneesLocalesDto pour la visualisation des données pour un indicateur à la dernière date d'enregistrement.
   * @param codeInsee
   */
  afficherDonneesLocales(codeInsee: string): Observable<DonneesLocalesDto> {


    const URL = URL_BACKEND + '/communes/' + codeInsee;

    return this.http.get<DonneesLocalesDto>(URL, { withCredentials: true })
      .pipe(
        tap(donnees => {

          this.subDonneesLocales.next(donnees);
        })
      )
  }

  /**
    *méthode qui récupère l'objet à afficher pour l'historique
    *
    * @param {string} codeInsee
    * @returns {Observable<DonneesLocalesHistorique>}
    * @memberof CommuneService
    */
  afficherHistorique(codeInsee: string, donneesRecherchees: DonneesLocalesRecherchees): Observable<DonneesLocalesHistorique[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true
    };

    const URL = URL_BACKEND + '/communes/historiques/' + codeInsee;

    return this.http.post<DonneesLocalesHistorique[]>(URL, donneesRecherchees, httpOptions);
  }


}
