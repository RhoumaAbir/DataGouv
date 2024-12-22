import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historique } from '../model/historique';
import { DonneeParent } from '../model/DonneeParent';
import { UtilDonne } from '../model/UtilDonne';
@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {
  
  private apiUrl = 'http://localhost:8083/catalogue/historique'; 
  constructor(private http: HttpClient) {}
 

  getAllHistoriques(): Observable<Historique[]> {
   return  this.http.get<Historique[]>(this.apiUrl+'/allHistoriques'); 
  }

  addHistorique(historique: Historique): Observable<Historique> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<Historique>(`${this.apiUrl}/addHistorique`, historique, httpOptions);
  }
  getHistoriqueById(id: number): Observable<Historique> {
    return this.http.get<Historique>(`${this.apiUrl}/${id}`);
  }
  updateHistorique(historique: Historique): Observable<Historique> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put<Historique>(
      `${this.apiUrl}`,
      historique,
      httpOptions
    );
  }
  // In HistoriqueService

/*getIdDonneeParentByNomTechniqueParent(): Observable<DonneeParent[]>{
  return this.http.get<DonneeParent[]>(`${this.apiUrl}/get-id-donnee-parent?nomTechniqueParent`);
}*/
// Add this method to create a Historique and associate it with a DonneeParent
createHistoriqueAndAssociateWithParent(historique: Historique, idDonneeParent: number): Observable<Historique> {
  return this.http.post<Historique>(`${this.apiUrl}/create-and-associate-with-parent?idDonneeParent=${idDonneeParent}`, historique);
}

getIdTechniqueParent(nomTechniqueParent:string): Observable<number>{

  const id= this.http.get<number>(`http://localhost:8083/catalogue/donneeParent/${nomTechniqueParent}`);
  console.log("ID : "+id);
  return id
}

  getAllNomTechniqueParents(): Observable<string[]> { 
    return this.http.get<string[]>(`${this.apiUrl}/nom-technique-parents`);}


  deleteHistory(id:number){
    return this.http.delete(`${this.apiUrl}/deleteHistory/${id}`);
  }
  getAllUtilisateurDonnes() :Observable <UtilDonne[] >{ 
    return this.http.get<UtilDonne[]>(`http://localhost:8083/catalogue/UtilisateurDonnee/allUtilisateurDonnees`);}
    getUtilisateurDonnes(id:number) :Observable <UtilDonne >{ 
      return this.http.get<UtilDonne>(`http://localhost:8083/catalogue/UtilisateurDonnee/${id}`);}
    
}