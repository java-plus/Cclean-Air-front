import {Injectable} from '@angular/core';
import {UtilisateurInscription} from '../entities/utilisateurInscription';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

const URL_BACKEND = environment.backendUrl;

/**
 * Classe des services liés à l'inscription d'un utilisateur.
 */
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  /**
   * Constructeur
   * @param _http : HttpClient
   */
  constructor(private _http: HttpClient) { }

  /**
   * Méthode effectuant la requête de création d'un utilisateur auprès de l'API.
   * @param utilisateur : UtilisateurInscription l'utilisateur à créer
   */
  creerCompte(utilisateur: UtilisateurInscription): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: true
    };

    return this._http.post<UtilisateurInscription>(`${URL_BACKEND}/comptes`,
      utilisateur, httpOptions);
  }
}
