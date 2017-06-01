import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksService } from './shared/books.service';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [],
  declarations: [BooksComponent, BookListComponent],
  providers: [BooksService]
})
export class BooksModule { }
