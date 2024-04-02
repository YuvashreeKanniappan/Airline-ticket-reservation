import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Search } from '../models/search';

@Injectable({
  providedIn: 'root'
})
 export class SearchService {


  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }
  
getUsersMultipleParamss(search:Search): Observable<Product[]> {
  const url = 'https://localhost:5001/api/v1.0/flight/search';
  let queryParams = new HttpParams();
  queryParams = queryParams.append("from_place",search.from_place);
  queryParams = queryParams.append("destination",search.destination);
  queryParams = queryParams.append("trip_Date",search.trip_Date.toString());
  return this.httpClient.get<Product[]>(url,{params:queryParams});
  }
}