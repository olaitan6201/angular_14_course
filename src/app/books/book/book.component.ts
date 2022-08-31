import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/carts/cart.service';
import { Book } from '../book.directive';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  // @Output() onAddCart = new EventEmitter<Book>()
  inCart = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() : void {
    this.cartService.add(this.book)
    this.inCart = true
    // this.onAddCart.emit(this.book)
  }

  removeFromCart() : void {
    this.cartService.remove(this.book)
    this.inCart = false
  }
}
