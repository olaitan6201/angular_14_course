import { Component, OnInit } from '@angular/core';
import { Book } from '../books/book.directive';
import { CartService } from './cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  carts : Book[] = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.carts = this.getCarts()
  }

  getCarts() : Book[]{
    return this.cartService.get()
  }

}
