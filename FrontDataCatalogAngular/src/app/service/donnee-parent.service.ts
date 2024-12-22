import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DonneeParent } from '../moodels/donnee-parent';

@Injectable({
  providedIn: 'root'
})
export class DonneeParentService {
  apiUrl = environment.baseUrl ;

  constructor(private http: HttpClient) {console.log(this.apiUrl);
   }

   DonneeParentList():Observable<DonneeParent[]> {
    return this.http.get<DonneeParent[]>(this.apiUrl+'/list-donneeParent');
  }
  ajouterDonneeParent(body: DonneeParent) :Observable<DonneeParent> {
    return this.http.post<DonneeParent>(this.apiUrl+'/add-donneeParent', body);
  }
  updateDonneeParent(idDonneeParent:number,body: DonneeParent):Observable<DonneeParent> {
    return this.http.put<DonneeParent>(this.apiUrl+'/updateDonneeParent/'+idDonneeParent, body);
  }
  ajouterDonneeParentSource(body: DonneeParent ,idSource: number) :Observable<DonneeParent> {
    return this.http.post<DonneeParent>(`${this.apiUrl}/add-DonneeParentSource/${idSource}`, body);
  }
  

  deleteDonneeParent(idDonneeParent: number):Observable<DonneeParent>  {
    return this.http.delete<DonneeParent>(this.apiUrl + '/Delete_donneeParent/'+idDonneeParent);
  }
  deleteAffectationParent(idDonneeParent: number ,idSource: number): Observable<void> {
    const url =  `${this.apiUrl}/deleteDonneeParentAffecter/${idDonneeParent}/${idSource}`;

    return this.http.delete<void>(url).pipe();
  }
  fetchData(data: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/fetchData`, data);
  }
  testfetchData(data: any[],idSource: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/testfetchdata/${idSource}`, data);
  }
  likeDonneeParent(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/likeDonneeParent/${id}`, null);
  }

  dislikeDonneeParent(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/dislikeDonneeParent/${id}`, null);
  }

}
