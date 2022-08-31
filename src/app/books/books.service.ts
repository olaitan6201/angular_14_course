import { Injectable } from "@angular/core";
import { CartService } from "../carts/cart.service";
import { Book } from "./book.directive";

@Injectable()

export class BooksService {
    books: Book[] = [
      {
        name: "Clean Code",
        image: "https://m.media-amazon.com/images/I/41SH-SvWPxL._SX260_.jpg",
        author: "Robbert C. Martins",
        amount: 700
      },
      {
        name: "The Pragmatic Programmer",
        image: "https://images-na.ssl-images-amazon.com/images/I/51yaxPX4BFL._SX360_BO1,204,203,200_.jpg",
        author: "David Thomas",
        amount: 5500
      },
      {
        name: "Test Driven Development for Embedded C",
        image: "https://images-na.ssl-images-amazon.com/images/I/51W6W+UOptL._SX415_BO1,204,203,200_.jpg",
        author: "James W Grenning",
        amount: 8000
      },
      {
        name: "Software Engineering | Tenth Edition",
        image: "https://images-na.ssl-images-amazon.com/images/I/511DuL1myZL._SX397_BO1,204,203,200_.jpg",
        author: "Ian Sommerville",
        amount: 1580
      },
    ]
    
    constructor(){}

    getBooks() : Book[]{
      return this.books.slice();
    }
}