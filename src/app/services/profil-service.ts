import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { UtilisateurProfil } from '../entities/UtilisateurProfil';

const URL_BACKEND = environment.backendUrl;

/**
 * Composant gérant le profil utilisateur.
 */
@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private infoUtilisateur = new Subject<UtilisateurProfil>();

  /**
   * Constructeur
   * @param _http : HttpClient
   */
  constructor(private http: HttpClient) { }

  /**
   * Méthode récupérant les données de l'utilisateur connecté.
   */
  get actionInfoUtilisateur() {
    return this.infoUtilisateur.asObservable();
  }

  /**
   * Méthode affichant les données de l'utilisateur connecté.
   *
   */
  visualiserProfil(): Observable<UtilisateurProfil> {
    return this.http.get<UtilisateurProfil>(URL_BACKEND.concat('/profil'), { withCredentials: true });
  }

  /**
   * Méthode permettant de modifier l'utilisateur connecté.
   */
  modifierProfil(utilisateur: UtilisateurProfil): Observable<UtilisateurProfil> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };

    return this.http.patch<UtilisateurProfil>(URL_BACKEND.concat('/profil/modification'), utilisateur, httpOptions);
  }

  supprimerProfil(emailASupprimer: string): Observable<void> {
    const httpOptions = {
      withCredentials: true
    };

    return this.http.delete<void>(URL_BACKEND.concat('/profil/suppression/').concat(emailASupprimer), httpOptions);
  }
}
