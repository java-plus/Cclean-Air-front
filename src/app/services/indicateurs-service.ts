import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ObservableLike, Observable } from 'rxjs';
import { CommuneIndicateur } from '../entities/commune-indicateur';
import { catchError } from 'rxjs/operators';

const URL_BACKEND = environment.backendUrl;


@Injectable({
  providedIn: 'root'
})
export class IndicateursService {




  constructor(private _http: HttpClient) { }


  getListeIndicateurs(): Observable<CommuneIndicateur[]> {


    return this._http.get<CommuneIndicateur[]>(`${URL_BACKEND}/indicateurs`, { withCredentials: true });

  }

  supprimerIndicateur(communeIndicateur: CommuneIndicateur): Observable<void> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true
    };

    return this._http.delete<void>(`${URL_BACKEND}/indicateurs`, httpOptions);

  }



}
