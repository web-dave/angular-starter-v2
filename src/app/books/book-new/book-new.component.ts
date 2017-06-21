import { Router } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  saved = false;
  constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      isbn: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      publisher: this.formBuilder.group({
        name: ['', Validators.required],
        url: ['', Validators.required]
      })
    });
  }

  saveBook() {
    this.booksService.createBook(this.form.value)
      .subscribe(() => {
        this.saved = true;
        this.router.navigate(['/books']);
      });
  }

  isSaved() {
    if (!this.saved) {
      return !this.form.dirty;
    }
    return true;
  }

}
