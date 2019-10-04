import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const URL_BACKEND = environment.backendUrl;

/**
 * Classe regroupant les services de la déconnexion.
 */
@Injectable({
  providedIn: 'root'
})
export class DeconnexionService {

  /**
   * Constructeur
   * @param _http : HttpClient
   */
  constructor(private _http: HttpClient) { }

  /**
   * Méthode sollicitant une déconnexion auprès de l'API er retournant un
   * observable.
   */
  deconnecterUtilisateur(): Observable<void> {
    const httpOptions = {
      withCredentials: true
    };

    return this._http.post<void>(`${URL_BACKEND}/logout`, {}, httpOptions);
  }
}
