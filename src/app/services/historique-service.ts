import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})

export class HistoriqueService {

  constructor(private http: HttpClient) { }

  recupererHistorique() {

  }
}
