import { IBook } from './../shared/custom-types';
import { BooksService } from './../shared/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: IBook[];
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(books => this.books = books);
  }

  selectBook(book: IBook) {
    console.log(book);
  }

}
