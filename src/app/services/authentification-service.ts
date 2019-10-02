import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) {
  }

  /**
   * Une requète est envoyée à l'application back, renvoie un observateur
   * @param Email de l'utilisateur
   * @param motDePasse de l'utilisateur
   */
  authentifier(email: string, motDePasse: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true,
    };

    return this.http.post(URL_BACKEND.concat('/connexion'), {
      email,
      motDePasse
    }, httpOptions);

  }
}
