import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';{}
import { Autorisation } from './autorisation';import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutorisationService {

  private baseURL="http://localhost:8083/catalogue/Autorisation/list_Autorisation"
  constructor(private httpClient:HttpClient) { }
  
  getAutorisationlist():Observable<Autorisation[]>{
    return this.httpClient.get<Autorisation[]>(`${this.baseURL}`);
  }

  createAutorisation(autorisation:Autorisation):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,autorisation);

  }
  getClassificationParId(id :number):Observable<object>{
    return this.httpClient.get<Autorisation>(`${this.baseURL}/${id}`)

  }
  updateAutorisation(id:number,autorisation:Autorisation){
    return this.httpClient.put(`${this.baseURL}/${id}`,autorisation)
  }
  deleteAutorisation(id:number){
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
  cerateAffecterAutorisation(id:number,autorisation:Autorisation){
    return this.httpClient.post(`${this.baseURL}/${id}`,autorisation)
  }
 
  getAutorisationsByClassificationId(id :number):Observable<Autorisation[]>{
    return this.httpClient.get<Autorisation[]>(`${this.baseURL}/ByClassificationId/${id}`)

  }
  desaffecteAutorisationClassification(id:number){
    return this.httpClient.put(`${this.baseURL}/desaffecter/${id}`, {})
  }
  getAutorisationCalssificationNull():Observable<Autorisation[]>{
    return this.httpClient.get<Autorisation[]>(`${this.baseURL}/calssificationNull`);
  }
  affecterAutorisationToClassification(idcla:number,idaut:number){
    return this.httpClient.put(`${this.baseURL}/affecterAutorisationToClassification/${idcla}/${idaut}`,{})
  }

}
