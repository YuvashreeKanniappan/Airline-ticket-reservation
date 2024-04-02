import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Passengers } from '../models/passengers';
import { displayticket } from '../models/displayticket';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
  })

  export class displayticketService {
    constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

    gettickets(displaytickets : displayticket): Observable<Passengers[]>
    {
        const url = 'https://localhost:5011/api/v1.0/flight/ticket';
        let queryParams = new HttpParams();
        queryParams = queryParams.append("PNR",displaytickets.PNR);
        return this.httpClient.get<Passengers[]>(url,{params:queryParams});
    }
    getFlightByID(passenger:Passengers): Observable<Product[]> {
      const url = 'https://localhost:5001/api/Admin/GetFlightDetailsById';
      let queryParams = new HttpParams();
      queryParams = queryParams.append("id",passenger.flightID);
      return this.httpClient.get<Product[]>(url,{params:queryParams});
      }

      CancelTicket(passengerss:Passengers): Observable<boolean> {
        const url = 'https://localhost:5011/api/FlightBooking/CancelTicket';
        let queryParams = new HttpParams();
        queryParams = queryParams.append("pnr",passengerss.pnr.toString());
       
        return this.httpClient.get<boolean>(url,{params:queryParams});
        }
      
  }