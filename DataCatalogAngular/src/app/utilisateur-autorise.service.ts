import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilisateurAutorise } from './utilisateur-autorise';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurAutoriseService {

  private baseURL="http://localhost:8083/catalogue/UtilisateurAutorise/list_UtilisateurAutorise"
                  
  constructor(private httpClient:HttpClient) { }
  getUtilisateurAutoriselist():Observable<UtilisateurAutorise[]>{
    return this.httpClient.get<UtilisateurAutorise[]>(`${this.baseURL}`);
  }

  createUtilisateurAutorise(utilisateurAutorise:UtilisateurAutorise):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,utilisateurAutorise);

  }
  getUtilisateurAutoriseParId(id :number):Observable<object>{
    return this.httpClient.get<UtilisateurAutorise>(`${this.baseURL}/${id}`)

  }
  updateUtilisateurAutorise(id:number,utilisateurAutorise:UtilisateurAutorise){
    return this.httpClient.put(`${this.baseURL}/${id}`,utilisateurAutorise)
  }
  deleteUtilisateurAutorise(id:number){
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
  ajouterAffecterUtilisateurAutorise(id:number,utilisateurAutorise:UtilisateurAutorise){
    return this.httpClient.post(`${this.baseURL}/${id}`,utilisateurAutorise)
  }
  private baseURL2="http://localhost:8083/catalogue/UtilisateurAutorise/list_UtilisateurAutorise/UtilisateurAutorisesByAutorisation"
  getUtilisateursAutorisesByAutorisationId(id :number):Observable<UtilisateurAutorise[]>{
    return this.httpClient.get<UtilisateurAutorise[]>(`${this.baseURL2}/${id}`)

  }
  getUtilisateurAutorisesByAutorisationNul():Observable<UtilisateurAutorise[]>{
    return this.httpClient.get<UtilisateurAutorise[]>(`${this.baseURL}/getAutorisationNull`);
  }
  affecterUtilisateurToAutorisation(idaut:number,iduti:number){
    return this.httpClient.put(`${this.baseURL}/affecterUtilisateurToAutorisation/${idaut}/${iduti}`,{})
   }
   desaffecterClassificationId(id:number){
    return this.httpClient.put(`${this.baseURL}/desaffecter/${id}`,{})
  }
}
