import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(private booksService: BooksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(books => this.books = books);
  }

  selectBook(book: IBook) {
    console.log(book);
    this.router.navigate([ book.isbn], {relativeTo: this.route});
  }

}
