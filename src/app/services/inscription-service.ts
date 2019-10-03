import {Injectable} from "@angular/core";
import {UtilisateurInscription} from "../entities/utilisateur-inscription";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const URL_BACKEND = environment.backendUrl;

/**
 * Classe des services liés à l'inscription d'un utilisateur.
 */
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private _http: HttpClient) {

  }

  get http(): HttpClient {
    return this._http;
  }

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
      utilisateur, httpOptions)
  }
}
