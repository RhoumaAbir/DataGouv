import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilDonne } from '../model/UtilDonne';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private apiUrl = 'http://localhost:8083/catalogue/UtilisateurDonnee'; 
  constructor(private http: HttpClient) {}
 

  getAllUserData(): Observable<UtilDonne[]> {
   return  this.http.get<UtilDonne[]>(this.apiUrl+'/allUtilisateurDonnees'); 
  }
  
  addUtilDonne(utilDonne:UtilDonne):Observable<UtilDonne> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<UtilDonne>(`${this.apiUrl}/addUtilisateurDonnee`, utilDonne,httpOptions);
  }

  getUtilDonneById(id: number): Observable<UtilDonne> {
    return this.http.get<UtilDonne>(`${this.apiUrl}/${id}`);
  }
  updateUtilDonne(historique: UtilDonne): Observable<UtilDonne> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put<UtilDonne>(
      `${this.apiUrl}`,
      historique,
      httpOptions
    );
  }

  deleteDataUser(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
