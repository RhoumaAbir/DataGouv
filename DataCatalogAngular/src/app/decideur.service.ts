import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  getdecideurById(referenceControle: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/afficher_decideur_par_id/${referenceControle}`);
  }
}
