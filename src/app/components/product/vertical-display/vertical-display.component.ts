import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-vertical-display',
  templateUrl: './vertical-display.component.html',
  styleUrls: ['./vertical-display.component.css']
})
export class VerticalDisplayComponent implements OnInit {
  constructor() { }
  @Input('myProductsDataRef') public products?: Product[];
  ngOnInit(): void {
  }
}
