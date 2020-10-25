import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cartItems = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.cart$
      .subscribe(data => this.cartItems = data.length);
  }

}
