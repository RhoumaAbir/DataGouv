import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { controle } from '../models/controle';


@Injectable({
  providedIn: 'root'
})
export class DecideurService {

  private apiUrl = 'http://localhost:8083/catalogue/catalogue';

  constructor(private http: HttpClient) { }

  getAll() : Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/afficher`);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/supprimerDecideur/${id}`);
  }
  // getdecideurById(id: string) {
  //   return this.http.get<any>(`${this.apiUrl}/afficher_decideur_par_id/${id}`);
  // }
  getdecideurById(referenceControle: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/afficher_decideur_par_id/${referenceControle}`);
  }
  public save(decideur: any) {
    return this.http.post<any>(`${this.apiUrl}/ajouter`,decideur);
  }
  public filtrByNomOrg(nomOrganisation: string) {
    return this.http.get<any>(`${this.apiUrl}/getlistbynomorganisation/${nomOrganisation}`);
  }
  getAuditsByOrganizationName(nomOrganisation: string): Observable<controle[]> {
    const url = `${this.apiUrl}/getlistbynomorganisation/${nomOrganisation}`; // Assuming your backend API endpoint is /api/audits
    return this.http.get<controle[]>(url);
  }
  
  
  // updateDecideur(decideurId: string, decideur: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/modifierDecideur`, decideur);
  // }
  // updateDecideur(referenceControle: string, decideur: any): Observable<any> {
  //   const url = `${this.apiUrl}/modifierDecideur/${referenceControle}`;
  //   return this.http.put(url, decideur);
  // }
  updateDecideur(referenceControle: any, decideur: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/modifierDecideur/${referenceControle}`, decideur);
  }
  // updateDecideur(referenceControle: any,  updatedcontrole: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/modifierDecideur/${referenceControle}`,  updatedcontrole);
  // }
}

