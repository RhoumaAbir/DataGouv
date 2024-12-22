import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { trace } from '../model/trace';
import { DonneeParent } from '../model/DonneeParent';
@Injectable({
  providedIn: 'root'
})
export class TraceService {
  private apiUrl = 'http://localhost:8083/catalogue/trace'; 
  constructor(private http: HttpClient) {}

  getAllTraces(): Observable<trace[]> {
    return this.http.get<trace[]>(`${this.apiUrl}/allTraces`);
  }

  getTracesByNomTechniqueParent(NomTechniqueParent: string): Observable<trace[]> {
    return this.http.get<trace[]>(`${this.apiUrl}/findByDonneeParentNomTechniqueParent/${NomTechniqueParent}`);
  }
  getAllNomTechniqueParents(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/all-nom-technique-parents`);
  }
  getAllDonneeParents(): Observable<DonneeParent[]> {
    return this.http.get<DonneeParent[]>(`${this.apiUrl}/all-donnee-parents`);
  }
  retrieveTraceWithHistoriques(idDonneeParent: number): Observable<any> {
    const url = `${this.apiUrl}/retrieveTraceWithHistoriques/${idDonneeParent}`;
    return this.http.get<any>(url);
  }
  retrieveTraces(idDonneeParent: number): Observable<any> {
    const url = `${this.apiUrl}/retrieveTraces/${idDonneeParent}`;
    return this.http.get<any>(url);
  }
}
