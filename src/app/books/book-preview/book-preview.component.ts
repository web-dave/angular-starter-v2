import { IBook } from './../shared/custom-types';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input() book: IBook;
  @Output() bookselected = new EventEmitter<IBook>();

  constructor() { }

  ngOnInit() {
  }

  selectThisBook() {
    this.bookselected.emit(this.book);
  }

}
