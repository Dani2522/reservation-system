import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/reservations/';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getAllReservation(): Observable<any>{
    return this.http.get(API_URL + 'all');
  }

  getReservationById(id:string): Observable<any>{
    return this.http.get(API_URL + id);
  }

  createReservation(reservation: any): Observable<any>{
    return this.http.post(API_URL + 'create', reservation);
  }

  updateReservation(id: string, reservation: any):Observable<any>{
    return this.http.put(API_URL + id, reservation);
  }

  deleteReservation(id: string): Observable<any> {
    return this.http.delete(API_URL + id );
  }
}
