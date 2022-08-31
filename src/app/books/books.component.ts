import { Component, OnInit } from '@angular/core';
import { Book } from './book.directive';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[] = []

  showBooks:boolean = true

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks()
  }

  // addToCart(event: Book):void {
  //   console.log(event);
  // }

}
