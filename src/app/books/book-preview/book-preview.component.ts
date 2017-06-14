import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit, OnChanges {
  @Input() book;
  @Output() bookselected = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    // Fires on every @input change
  }

  selectThisBook() {
    this.bookselected.emit(this.book);
  }

}
