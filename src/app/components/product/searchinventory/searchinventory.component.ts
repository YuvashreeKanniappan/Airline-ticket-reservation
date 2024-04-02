import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import {Search} from 'src/app/models/search';

@Component({
  selector: 'app-searchinventory',
  templateUrl: './searchinventory.component.html',
  styleUrls: ['./searchinventory.component.css']
})
export class SearchinventoryComponent implements OnInit {
  products!: Array<Product>
  product!: Product;
  searchs: Array<Search>
  search: Search;
  

  constructor(private productservice : ProductService) { 
    this.product! = new Product();
this.products! = [];
this.search = new Search();
this.searchs = [];
  }

  ngOnInit(): void {
  }

//   searchInventory()
// {

// this.searchs?.push(this.search);
// let starttime=this.search.trip_Date;
// let fromplace=this.search.Fromplace;
// let Toplace=this.search.ToPlace;
//let airlinename=this.inventory.airline




// let starttime=JSON.stringify(this.inventory.startdatetime);
// let fromplace=JSON.stringify(this.inventory.fromPlace);
// let Toplace=JSON.stringify(this.inventory.toPlace);
// let airlinename=JSON.stringify(this.inventory.airline);
// this.productservice.getUsersMultipleParamss(this.search).subscribe((res) => {
// debugger;
// console.log(`The Add Product Result:${res}`);
// this.products=res;
// debugger;



};
//}


