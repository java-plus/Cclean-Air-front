import {Injectable} from "@angular/core";
import {Utilisateur} from "../entities/utilisateur";
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
   * @param utilisateur : Utilisateur l'utilisateur à créer
   */
  creerCompte(utilisateur: Utilisateur): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: true
    };

    return this._http.post<Utilisateur>(`${URL_BACKEND}/comptes`,
      utilisateur, httpOptions)
  }
}
