import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksService } from './shared/books.service';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PagesPipe } from './shared/pages.pipe';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [],
  declarations: [BooksComponent, BookListComponent, BookPreviewComponent, BookDetailsComponent, PagesPipe],
  providers: [BooksService]
})
export class BooksModule { }
