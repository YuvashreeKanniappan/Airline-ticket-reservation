import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { RouterService } from 'src/app/services/router.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  products: Array<Product>
  product: Product;

  constructor(private productService: ProductService, private routerService: RouterService) { 
    this.product = new Product();
    this.products = [];
  }

  ngOnInit(): void {
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

}
