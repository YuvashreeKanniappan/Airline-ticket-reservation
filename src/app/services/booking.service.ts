import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { Observable } from 'rxjs';
import { History } from '../models/history';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

bookingLogin(bookingmodel: Array<Booking>):Observable<Booking[]>
{
  return this.httpClient.post<Booking[]>('https://localhost:5011/api/v1.0/flight/booking/Bookticket', bookingmodel);
}

getBookingHistory(history: History): Observable<Booking[]> {
  const url = 'https://localhost:5011/api/v1.0/flight/booking/history';
  let queryParams = new HttpParams();
  queryParams = queryParams.append("mail", history.mail );
  //queryParams = queryParams.append("from_place",'BLR');
  //queryParams = queryParams.append("destination",'HYD');
  return this.httpClient.get<Booking[]>(url,{params:queryParams});
  }
}
