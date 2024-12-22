import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Mot_Cle} from "../Model/Mot_Cle";
const httpOptions = {
  headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
      }
  )
};
@Injectable({
  providedIn: 'root'
})
export class MotCleService {

  constructor(private http : HttpClient) { }
  public getEtudiant():Observable<Mot_Cle[]>{
    return this.http.get<Mot_Cle[]>(`http://localhost:8083/catalogue/MotCle/afficher`);
  }
}
