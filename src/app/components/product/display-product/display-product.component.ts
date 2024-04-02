import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { SearchService } from 'src/app/services/search.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  errorMessage?: string = 'Get All Flights Details';
  products?: Product[];
  constructor(private productService:ProductService,private searchservice:SearchService) { }

  ngOnInit(): void {

     this.productService.getAllProducts().subscribe({
       next: (res) => { console.log(res); this.products = res; },
       error: (e) => {
         console.error(e);
       this.errorMessage = e.message;
         Swal.fire(
           'Error!',
          'GetAll Flights Error!!',
           'error'
         )
      },
   });
   }
  
  // this.searchservice.getUsersMultipleParams().subscribe({
  //   next: (res) => { console.log(res); this.products = res; },
  //   error: (e) => {
  //   console.error(e);
  //   this.errorMessage = e.message;
  //   Swal.fire(
  //   'Error!',
  //   'GetAll Flights Error!!',
  //   'error'
  //   )
  //   },
  //   });

}

