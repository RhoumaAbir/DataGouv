import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Source } from '../models/source';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  apiUrl = environment.baseUrl ;

  constructor(private http: HttpClient) {console.log(this.apiUrl);
   }

 

  sourceList():Observable<Source[]> {
    return this.http.get<Source[]>(this.apiUrl+'/list-Source');
  }
  ajouterSource(body: Source) :Observable<Source> {
    return this.http.post<Source>(this.apiUrl+'/add-Source', body);
  }
  getSourceById(idSource: number): Observable<Source>{
    return this.http.get<Source>(this.apiUrl+'/trouver_Source/'+idSource);
  }
  updateSource(idSource:number,body: Source):Observable<Source> {
    return this.http.put<Source>(this.apiUrl+'/UpdateSource/'+idSource, body);
  }

  deleteSource(idSource: number):Observable<Source>  {
    return this.http.delete<Source>(this.apiUrl + '/Delete_source/'+idSource);
  }

  affecterCollectionASource(idSource: number, idCollection: number): Observable<Source> {

    return this.http.post<Source>(`${this.apiUrl}/affecterCollection/${idSource}/${idCollection}`,idCollection)
  }
  deleteAffectation(idSource: number, idCollection: number): Observable<void> {
    const url =  `${this.apiUrl}/deleteSourceAffecter/${idSource}/${idCollection}`;

    return this.http.delete<void>(url).pipe();
  }

}
