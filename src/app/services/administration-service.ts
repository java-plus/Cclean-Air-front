import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {MembreAdministration} from '../entities/membre-administration';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const URL_BACKEND = environment.backendUrl;

/**
 * Composant gérant l'interface d'administration.
 */
@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  /**
   * Constructeur
   * @param _http : HttpClient
   */
  constructor(private _http: HttpClient) {}

  /**
   * Méthode récupèrant la liste des membres et la retourne sous forme
   * d'observable de liste.
   */
  recupererListeMembres(): Observable<MembreAdministration[]> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        withCredentials: true
      };

      return this._http.get<MembreAdministration[]>(`${URL_BACKEND}/admin/membres`, httpOptions);
  }

  /**
   * Méthode supprimant un utilisateur de l'API.
   * @param emailASupprimer : string l'email de l'utilisateur à supprimer
   */
  supprimerMembre(emailASupprimer: string): Observable<any> {
    const httpOptions = {
      withCredentials: true
    };

    return this._http.delete(`${URL_BACKEND}/admin/membres/${emailASupprimer}`, httpOptions);
  }

}
