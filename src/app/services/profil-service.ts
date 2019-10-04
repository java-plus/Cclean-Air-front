import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { UtilisateurProfil } from '../entities/UtilisateurProfil';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private infoUtilisateur = new Subject<UtilisateurProfil>();

  constructor(private http: HttpClient) { }

  get actionInfoUtilisateur() {
    return this.infoUtilisateur.asObservable();
  }

  visualiserProfil(): Observable<UtilisateurProfil> {
    return this.http.get<UtilisateurProfil>(URL_BACKEND.concat('/profil'), { withCredentials: true });
    }

  modifierProfil(utilisateur: UtilisateurProfil): Observable<UtilisateurProfil> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };

    return this.http.patch<UtilisateurProfil>(URL_BACKEND.concat('/profil/modification'), utilisateur, httpOptions);
  }
}
