import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { RouterService } from 'src/app/services/router.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products: Array<Product>
  product: Product;
  constructor(private productService: ProductService, private routerService: RouterService) {
    this.product = new Product();
    this.products = [];
  }
  ngOnInit(): void {
    // this.product.name = 'Dell';
    // this.product.description = 'dell latptop';
    // this.product.category = "laptop";
    // this.product.isAvailble = true;
    // this.products.push(this.product);
    // this.productService.addProduct(this.products).subscribe((res: any) => {
    //   console.log(`The Add Product Result:${res}`);
    //   if (res == true) {
    //     this.routerService.gotoDisplayProduct();
    //   }
    //   else {
    //     this.routerService.gotoLogin();
    //   }
    // });
  }
  addProduct() {
    this.products.push(this.product);
    this.productService.addProduct(this.products).subscribe((res: any) => {
      console.log(`The Add Product Result:${res}`);
      if (res == true) {
        Swal.fire('Product Details', 'Added Successfully!!', 'success');
        this.routerService.gotoDisplayProduct();
      }
      else {
        this.routerService.gotoLogin();
      }
    });
  }

  // getFlights()
  // {
  //   this.routerService.gotoDisplayProduct();
  // }

  // getTickets()
  // {
  //   //  this.observablepass = this.passengerService.getTickets();
  //   //    this.observablepass.subscribe(
  //   //    pass => this.passengers = pass)
  //     this.routerService.gotoDisplayTicket();
  // }

}
