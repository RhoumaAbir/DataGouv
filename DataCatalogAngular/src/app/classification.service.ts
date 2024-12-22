import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classification } from './classification';
import { Observable } from 'rxjs';
import { DonneeParent } from './donnee-parent';
import { DonneeFils } from './donnee-fils';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  private baseURL="http://localhost:8083/catalogue/Classification/list_Classification"
  constructor(private httpClient:HttpClient) { }
  
  getClassificationlist():Observable<Classification[]>{
    return this.httpClient.get<Classification[]>(`${this.baseURL}`);
  }

  createClassification(classification:Classification):Observable<object>{
   return this.httpClient.post(`${this.baseURL}`,classification);
  }
  getClassificationParId(id :number):Observable<object>{
    return this.httpClient.get<Classification>(`${this.baseURL}/${id}`)

  }
  updateClassification(id:number,reclamation:Classification){
    return this.httpClient.put(`${this.baseURL}/${id}`,reclamation)
  }
  deleteClassification(id:number){
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
  private baseURL2="http://localhost:8083/Classification/download"
  telecharger_fichier(filename:string)
  {
    return this.httpClient.get<String>(`${this.baseURL2}/${filename}`)
  }
  

  upload(formData: FormData): Observable<object> {
    return this.httpClient.post(`${this.baseURL}/upload`, formData);
  }

  createClassificationAffecterDonneFils(id:number,classification:Classification):Observable<object>{
    return this.httpClient.post(`${this.baseURL}/ajouter_classificationEtAffecterDonnesFils/${id}`,classification);
   }
   getdonneParent():Observable<DonneeParent[]>{
    return this.httpClient.get<DonneeParent[]>(`${this.baseURL}/DonneeParent`);
  }
  ajouterAffecterClassificationDonneeParent(Classification:Classification,id:number){
    return this.httpClient.post(`${this.baseURL}/ajouter_classificationEtAffecterDonneeParent/${id}`,Classification)
  }
  getDonneeFils():Observable<DonneeFils[]>{
    return this.httpClient.get<DonneeFils[]>(`${this.baseURL}/DonneeFils`);
  }
  ajouterAffecterClassificationDonnesFils(Classification:Classification,id:number){
    return this.httpClient.post(`${this.baseURL}/ajouter_classificationEtAffecterDonnesFils/${id}`,Classification)
  }
  ajouterAffecterClassificationDonnesFilsetParent(Classification:Classification,idf:number,idp:number){
    return this.httpClient.post(`${this.baseURL}/ajouter_classificationEtAffecterDonneeParentEtFils/${idf}/${idp}`,Classification)
  }

  getDonneParentClassificationId(id :number):Observable<DonneeParent[]>{
    return this.httpClient.get<DonneeParent[]>(`${this.baseURL}/DonneeParentParClassification/${id}`)

  }
  desaffecterClassificationId(idCl:number,idDon:number){
    return this.httpClient.put(`${this.baseURL}/desaffecteClassificationToDonneParen/${idCl}/${idDon}`,{})
  }
  getDonneParentClassificationNull():Observable<DonneeParent[]>{
    return this.httpClient.get<DonneeParent[]>(`${this.baseURL}/DonneeParentNonAffecter`)
 }

 affecterClassificationToDonnePatrent(idcla:number,idaut:number){
  return this.httpClient.put(`${this.baseURL}/AffecteClassificationToDonneParen/${idcla}/${idaut}`,{})
}

}
