import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DonneeParent } from '../donnee-parent';
import { DonneeFils } from '../donnee-fils';

@Injectable({
  providedIn: 'root'
})
export class DonneeFilsService {
  apiUrl = environment.baseUrl ;

  constructor(private http: HttpClient) {console.log(this.apiUrl);
   }




   DonneeFilsList():Observable<DonneeFils[]> {
    return this.http.get<DonneeFils[]>(this.apiUrl+'/list-donneeFils');
  }
}