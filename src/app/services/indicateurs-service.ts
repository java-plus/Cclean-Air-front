import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ObservableLike, Observable, Subject } from 'rxjs';
import { CommuneIndicateur } from '../entities/commune-indicateur';
import { catchError, tap } from 'rxjs/operators';
import { IndicateurCreation } from '../entities/Indicateur-creation';

const URL_BACKEND = environment.backendUrl;


@Injectable({
  providedIn: 'root'
})
export class IndicateursService {

  subAncienIndicateur = new Subject<IndicateurCreation>();


  constructor(private _http: HttpClient) { }

  get subAncienIndicateurObs(): Observable<IndicateurCreation> {
    return this.subAncienIndicateur.asObservable()
  }

  getListeIndicateurs(): Observable<CommuneIndicateur[]> {


    return this._http.get<CommuneIndicateur[]>(`${URL_BACKEND}/indicateurs`, { withCredentials: true });

  }

  supprimerIndicateur(nomCommune: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true
    };

    return this._http.delete(`${URL_BACKEND}/indicateurs/${nomCommune}`, httpOptions);

  }

  enregistrerIndicateur(indicateurCreation: IndicateurCreation) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true
    };

    return this._http.post(`${URL_BACKEND}/indicateurs`, indicateurCreation, httpOptions);


  }

  modifierIndicateur(indicateurModif: IndicateurCreation, ancienIndicateur: IndicateurCreation) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true
    };

    return this._http.patch(`${URL_BACKEND}/indicateurs`, indicateurModif, httpOptions);
  }

  modifAncienIndicateur(indicateur: IndicateurCreation) {
    this.subAncienIndicateur.next(indicateur)

  }


}
