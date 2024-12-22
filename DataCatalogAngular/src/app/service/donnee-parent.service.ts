import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DonneeParent } from '../models/donnee-parent';

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
}