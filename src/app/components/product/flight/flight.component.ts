import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import {Search} from 'src/app/models/search';
import { SearchService } from 'src/app/services/search.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  products!: Array<Product>
product!: Product;
searchs: Array<Search>
search: Search;


  constructor(private searchservice: SearchService, private routerservice : RouterService) {
    this.product! = new Product();
this.products! = [];
this.search = new Search();
this.searchs = [];
   }

  ngOnInit(): void {
  }


  searchInventory()
{

this.searchs?.push(this.search);
// let starttime=this.search.trip_Date;
// let fromplace=this.search.Fromplace;
// let Toplace=this.search.ToPlace;
//let airlinename=this.inventory.airline




// let starttime=JSON.stringify(this.inventory.startdatetime);
// let fromplace=JSON.stringify(this.inventory.fromPlace);
// let Toplace=JSON.stringify(this.inventory.toPlace);
// let airlinename=JSON.stringify(this.inventory.airline);
this.searchservice.getUsersMultipleParamss(this.search).subscribe((res) => {
debugger;
console.log(`The Add Product Result:${res}`);
this.products=res;
debugger;



});
}

bookflights(flightId?: number)
{
  //this.router.navigate(['/hotels/' + id]);
  //this.routerservice.gotobookTickets(['/booking/' + id]);
  this.routerservice.gotobookTickets(flightId);
  //return this.routerservice.gotobookTickets.find((h: any) => h.flightId === flightId);
}

}
