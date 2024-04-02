import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product'
import { Search } from '../models/search';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient: HttpClient) { }

  addProduct(product: Array<Product>): Observable<boolean> {
    return this.httpClient.post<boolean>('https://localhost:5001/api/v1.0/flight/airline/inventory/add', product);
  }
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://localhost:5001/api/Admin/getAllInventory');
  }
}
