import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-horizontal-display',
  templateUrl: './horizontal-display.component.html',
  styleUrls: ['./horizontal-display.component.css']
})
export class HorizontalDisplayComponent implements OnInit {
  errorMessage?: string = 'Get All Product Details';
  // products?: Product[];
  @Input('myProductsDataRef') public products?: Product[];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    console.log('In Horizontal Display...................');
  }

}
