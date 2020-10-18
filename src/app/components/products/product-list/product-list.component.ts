import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = [
    {
      id: '1',
      thumbnail: '/assets/images/purple-t-shirt@2.jpg',
      image: '/assets/images/purple-t-shirt@1.jpg',
      title: 'Camiseta morada',
      price: 30.5,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      thumbnail: '/assets/images/xiaomi-band@2.jpg',
      image: 'assets/images/xiaomi-band@1.jpg',
      title: 'Xiaomi Mi Band',
      price: 25,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      thumbnail: '/assets/images/teal-t-shirt@2.jpg',
      image: 'assets/images/teal-t-shirt@1.jpg',
      title: 'Camiseta verde',
      price: 30.5,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      thumbnail: '/assets/images/wooden-watch@2.jpg',
      image: 'assets/images/wooden-watch@1.jpg',
      title: 'Reloj de madera',
      price: 19.99,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      thumbnail: '/assets/images/wireless-headphones@2.jpg',
      image: 'assets/images/wireless-headphones@1.jpg',
      title: 'Auriculares Wireless',
      price: 110,
      description: 'bla bla bla bla bla'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  handleAddToCart(product: Product): void {
    console.log('product added:', product);
  }

}
