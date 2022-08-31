import { Injectable } from '@angular/core';
import { Book } from '../books/book.directive';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts : Book[] = []

  constructor() { }

  add(book: Book): void{
    this.carts.push(book)
  }

  get() : Book[]{
    return this.carts.slice()
  }

  remove(book: Book) : void {
    this.carts = this.carts.filter((cart) => cart !== book)
  }
}
