import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.directive';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  constructor() { }

  ngOnInit(): void {
  }

}
