import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passengers } from '../models/passengers';
import { HttpClient, HttpParams } from '@angular/common/http';
import { displayticket } from '../models/displayticket';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {

  constructor(private httpClient: HttpClient) { }

  addPassengers(passengers: Array<Passengers>): Observable<Passengers[]> {
    return this.httpClient.post<Passengers[]>('https://localhost:5011/api/FlightBooking/flight/booking/addpassengers', passengers);
  }

   getTickets(display: displayticket): Observable<Passengers[]> {
     const url = 'https://localhost:5011/api/v1.0/flight/ticket';
     let queryParams = new HttpParams();
     queryParams = queryParams.append("pnr", display.PNR);
     //queryParams = queryParams.append("from_place",'BLR');
     //queryParams = queryParams.append("destination",'HYD');
     return this.httpClient.get<Passengers[]>(url,{params:queryParams});
     }
   }

