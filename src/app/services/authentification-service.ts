import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UtilisateurAuthentification} from "../entities/utilisateur-authentification";
const URL_BACKEND = environment.backendUrl;

/**
 * Classe des services de l'authentification.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) {
  }

  /**
   * Une requète est envoyée à l'application back, renvoie un observateur
   * @param utilisateur
   */
  authentifier(utilisateur: UtilisateurAuthentification): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true,
    };

    return this.http.post(URL_BACKEND.concat('/connexion'), utilisateur, httpOptions);

  }
}
