import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MotCle} from "../entity/MotCle";
import {RegleQualite} from "../entity/RegleQualite";
import {AffectationRequest} from "../entity/AffectationRequest";
import {DonneFils} from "../entity/DonneFils";

@Injectable({
  providedIn: 'root'
})
export class RegleQualiteService {

  constructor(private http:HttpClient) { }
  public findAll(): Observable<RegleQualite[]> {
    return this.http.get<RegleQualite[]>("http://localhost:8083/catalogue/RegleQualite/afficherRegle") ;
  }
  public findAllbymotcle(idMotCle :number): Observable<RegleQualite[]> {
    return this.http.get<RegleQualite[]>("http://localhost:8083/catalogue/RegleQualite/AfficherParMotCle/{id}?id="+`${idMotCle}`) ;
  }
  affecterRegleMot(idDonne: AffectationRequest, idRegle: number): Observable<any> {

    return this.http.put(" http://localhost:8083/catalogue/RegleQualite/affecter_mot_regle/{id_regle}?id_regle="+`${idRegle}`, idDonne);
  }
}
