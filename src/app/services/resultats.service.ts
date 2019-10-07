import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ResultatRechercheCommune} from '../entities/ResultatRechercheCommune';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultatsService {

  constructor(private http: HttpClient) {
  }

  private action = new Subject<ResultatRechercheCommune>();

  get actionObs() {
    return this.action.asObservable();
  }




}
