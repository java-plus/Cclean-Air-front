import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { DonneesLocalesDto } from '../entities/DonneesLocalesDto';
import { tap, catchError, map } from 'rxjs/operators';
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


  afficherDonneesLocales(codeInsee: string): Observable<DonneesLocalesDto> {


    const URL = URL_BACKEND + '/communes/' + codeInsee;

    return this.http.get<DonneesLocalesDto>(URL, { withCredentials: true })
      .pipe(
        tap(donnees => {

          this.subDonneesLocales.next(donnees);
        })
      )
  }


}
