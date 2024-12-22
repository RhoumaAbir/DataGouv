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
  getauditById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/afficher_auditeur_par_id/${id}`);
  }
}
