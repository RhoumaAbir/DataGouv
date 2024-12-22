import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DonneeFils } from '../moodels/donnee-fils';
import { Observable } from 'rxjs';

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
