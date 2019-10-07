import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommuneCarte} from '../entities/CommuneCarte';
import {environment} from '../../environments/environment';
import {CommuneRecherche} from '../entities/CommuneRecherche';
import {ResultatRechercheCommune} from '../entities/ResultatRechercheCommune';
import {Commune} from '../entities/commune';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  /**
   * Envoie une requete au back pour récupérer les données nécessaires à l'affichage des points sur la carte avec les différentes données
   * Retourne un obervateur d'une liste de l'objet CommuneCarte.
   */
  recupererCommunesAvecNiveauAlerte(): Observable<Array<CommuneCarte>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true,
    };

    return this.http.get<Array<CommuneCarte>>(URL_BACKEND.concat('/donnees_carte'), httpOptions);
  }

  recupererDonneesCommune(commune: CommuneRecherche): Observable<ResultatRechercheCommune> {

    console.log('commune recherchée : ' + commune);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true
    };



    return this.http.post<ResultatRechercheCommune>(URL_BACKEND.concat('/details_commune'), {
      codeInsee: commune.codeEtNom.codeInsee,
      nomCommune: commune.codeEtNom.nomCommune,
      polluant: commune.polluant,
      date: commune.date,
      heure: commune.heure,
      alerte: commune.alerte
    }, httpOptions);
  }

  /**
   * Requete qui récupère les noms de tous les polluants sans doublons stockés dans la base.
   */
  recupererNomsPolluants(): Observable<Array<string>> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true};
    return this.http.get<Array<string>>(URL_BACKEND.concat('/polluant/noms'), httpOptions);
  }



  /**
   * Méthode envoyant un requête GET pour récuperer la liste des communes de
   * l'API.
   */
  recupererCommunes(): Observable<Commune[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      withCredentials: true,
    };

    return this.http.get<Commune[]>(URL_BACKEND.concat('/communes'), httpOptions);
  }
}


