import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MotCle} from "../entity/MotCle";
import {DonneFils} from "../entity/DonneFils";
import {AffectationRequest} from "../entity/AffectationRequest";

@Injectable({
  providedIn: 'root'
})
export class MotCleService {


  constructor(private http:HttpClient) { }

  public findAll(): Observable<MotCle[]> {
    return this.http.get<MotCle[]>("http://localhost:8083/catalogue/MotCle/afficher") ;
  }

  public save(motCle: MotCle) {
    return this.http.post<MotCle>("http://localhost:8083/catalogue/MotCle/ajouter", motCle);
  }
  public findAllDonnerEntrprise(): Observable<DonneFils[]> {
    return this.http.get<DonneFils[]>("http://localhost:8083/catalogue/afficher/popup/{id}?id=1") ;
  }
  public findAllDonnerEntrprise_Mot(idMotCle :number): Observable<DonneFils[]> {
    return this.http.get<DonneFils[]>("http://localhost:8083/catalogue/afficher/entreprise_mot/{id}?id="+`${idMotCle}`) ;
  }
  affecterDonneMotCle(idDonne: AffectationRequest, idMotCle: number): Observable<any> {

    return this.http.put(" http://localhost:8083/catalogue/MotCle/affecter_donne_motcle/{id_mot}?id_MotCle="+`${idMotCle}`, idDonne);
  }
  deleteMotCle(id: number): Observable<any> {
    return this.http.delete('http://localhost:8083/catalogue/MotCle/supprimer/{id_mot}?id_MotCle=');
  }

}
