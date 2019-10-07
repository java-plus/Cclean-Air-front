import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HistoriqueDto } from '../entities/historiqueDto';
import { RechercheHistorique } from '../entities/rechercheHistorique';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})

export class HistoriqueService {

  constructor(private http: HttpClient) { }

  demanderHistorique(codeInc: string, rechercherHistorique: RechercheHistorique): Observable<HistoriqueDto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true,
    };

    return this.http.post<HistoriqueDto>(URL_BACKEND.concat('/communes/historiques/').concat(codeInc), httpOptions);
  }
}
