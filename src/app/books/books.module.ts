import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [BooksComponent],
  declarations: [BooksComponent, BookListComponent]
})
export class BooksModule { }
