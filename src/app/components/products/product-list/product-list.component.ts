import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getAll()
      .subscribe(data => {
        this.products = data;
      });
  }

  handleAddToCart(product: Product): void {
    console.log('product added:', product);
  }

}
