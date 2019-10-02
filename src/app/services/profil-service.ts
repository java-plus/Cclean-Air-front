import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Utilisateur } from '../entities/Utilisateur';
import { tap } from 'rxjs/operators';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private utilisateur: Utilisateur;
  private infoUtilisateur = new BehaviorSubject(this.utilisateur);

  constructor(private http: HttpClient) { }

  visualiserProfil(email: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(URL_BACKEND.concat('/profil'), { withCredentials: true }).pipe(
      tap(infos => { this.infoUtilisateur.next(infos); }));
    }
}
