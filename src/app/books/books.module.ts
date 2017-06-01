import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [BooksComponent],
  declarations: [BooksComponent]
})
export class BooksModule { }
