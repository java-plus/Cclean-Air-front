import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {MembreAdministration} from "../entities/membre-administration";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UtilisateurInscription} from "../entities/utilisateurInscription";

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private _http: HttpClient) {}

// http://localhost:8090/admin/membres

  recupererListeMembres(): Observable<MembreAdministration[]> {
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        }),
        withCredentials: true
      };

    return this._http.get<MembreAdministration[]>(`${URL_BACKEND}/admin/membres`, httpOptions)
  }

  supprimerMembre(emailASupprimer: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      withCredentials: true
    };

    return this._http.delete(`${URL_BACKEND}/admin/membres`, httpOptions)
  }

}
