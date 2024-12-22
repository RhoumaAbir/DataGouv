import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historique } from '../model/historique';
@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  private apiUrl = 'http://localhost:8083/catalogue/historique'; 
  constructor(private http: HttpClient) {}

  
  getAllHistoriques(): Observable<Historique[]> {
    return  this.http.get<Historique[]>(this.apiUrl+'/allHistoriques'); 
   }
}
