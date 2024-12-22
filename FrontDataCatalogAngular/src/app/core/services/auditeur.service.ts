import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuditeurService {
  private apiUrl = 'http://localhost:8083/catalogue/catalogues';
  constructor(private http: HttpClient) { }
  getAll() : Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/afficher1`);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/supprimerauditeur/${id}`);
  }
  getauditById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/afficher_auditeur_par_id/${id}`);
  }
  updateAudit( newData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/modifier_Auditeur`, newData);
  }
  public save(decideur: any) {
    return this.http.post<any>(`${this.apiUrl}/ajouteraudit`,decideur);
  }
  public filtrByNomOrg(nomOrganisation: string) {
    return this.http.get<any>(`${this.apiUrl}/getlistbynomorganisation/${nomOrganisation}`);
  }

}
