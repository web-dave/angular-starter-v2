import { Observable } from 'rxjs/Rx';
import { FORM_DIRTY, FORM_PRISTINE, IAppState } from '../../redux/store';
import { Router } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  saved = false;
  dirty;
  constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    private router: Router,
    private ngRedux: NgRedux<IAppState>
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

  checkForm() {
    console.log('-->', this.form.dirty)
    if (this.form.dirty) {
      this.ngRedux.dispatch(FORM_DIRTY)
    } else {
      this.ngRedux.dispatch(FORM_PRISTINE)
    }
  }

  saveBook() {
    this.booksService.createBook(this.form.value)
      .subscribe(() => {
        this.ngRedux.dispatch(FORM_PRISTINE)
        this.router.navigate(['/books']);
      });
  }

}
