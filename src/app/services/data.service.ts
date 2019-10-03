import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommuneCarte} from '../entities/CommuneCarte';
import {environment} from '../../environments/environment';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  /**
   * Envoie une requete au back pour récupérer les données nécessaires à l'affichage des points sur la carte avec les différentes données
   * Retourne un obervateur d'une liste de l'objet CommuneCarte.
   */
  recupererCommunesAvecNiveauAlerte(): Observable<Array<CommuneCarte>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true,
    };

    return this.http.get<Array<CommuneCarte>>(URL_BACKEND.concat('/donnees_carte'), httpOptions);
  }
}




