import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Segment } from '../model/segment';
import { DonneeParent } from '../model/DonneeParent';
@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  private apiUrl = 'http://localhost:8083/catalogue/segment'; 
  constructor(private http: HttpClient) {}

  getAllSegments(): Observable<Segment[]> {
    return this.http.get<Segment[]>(this.apiUrl+'/allSegment');
  }
  deleteSegment(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  addSegment(segment:Segment):Observable<Segment> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<Segment>(`${this.apiUrl}/addSegment`, segment,httpOptions);
  }
}
