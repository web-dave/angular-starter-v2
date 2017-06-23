import { IBook } from './../shared/custom-types';
import { BooksService } from './../shared/books.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book: IBook;

  constructor(
      private booksService: BooksService,
      private router: Router,
      private route: ActivatedRoute) { }


  ngOnInit() {
    this.route
      .params
      .subscribe((params: {isbn: string}) => {
        this.booksService.getBook(params.isbn)
          .subscribe(b => {
            console.log('!!', b);
            this.book = b;
          });
      });
  }

  saveBook(book) {
    this.booksService.updateBook(book)
          .subscribe(() => {
            this.router.navigate(['..'],{relativeTo:this.route});
          });
  }

}

