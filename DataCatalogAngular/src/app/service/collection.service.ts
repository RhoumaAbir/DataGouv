import { Injectable } from '@angular/core';
import { Collection } from '../models/collection';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  apiUrl = environment.baseUrl ;

  constructor(private http: HttpClient) {console.log(this.apiUrl);
   }

 

  collectionList():Observable<Collection[]> {
    return this.http.get<Collection[]>(this.apiUrl+'/list-collection');
  }
  ajouterCollection(body: Collection) :Observable<Collection> {
    return this.http.post<Collection>(this.apiUrl+'/add-Collection', body);
  }
  getCollectionById(idCollection: number): Observable<Collection>{
    return this.http.get<Collection>(this.apiUrl+'/trouver_Collection/'+idCollection);
  }
  updateCollection(idCollection:number,body: Collection):Observable<Collection> {
    return this.http.put<Collection>(this.apiUrl+'/UpdateCollection/'+idCollection, body);
  }

  deleteCollection(idCollection: number):Observable<Collection>  {
    return this.http.delete<Collection>(this.apiUrl + '/Delete/'+idCollection);
  }

  affecterOrgACollection(idCollection: number, idOrganisation: number): Observable<Collection> {

    return this.http.post<Collection>(`${this.apiUrl}/affecterOrganisation/${idCollection}/${idOrganisation}`,idOrganisation)
  }
  deleteAffectation(idCollection: number, idOrganisation: number): Observable<void> {
    const url =  `${this.apiUrl}/deleteAffectation/${idCollection}/${idOrganisation}`;

    return this.http.delete<void>(url).pipe();
  }

}
