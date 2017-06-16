import { IBook } from './custom-types';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {
  restRoot = 'http://localhost:4730/books';

  constructor(private http: Http) { }


  getBooks(): Observable<IBook[]> {
    const url = this.restRoot;
    return this.http.get(url)
      .map(res => res.json());
  }

  getBook(isbn): Observable<IBook> {
    const url = `${this.restRoot}/${isbn}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  updateBook(book): Observable<IBook> {
    const url = `${this.restRoot}/${book.isbn}`;
    return this.http.patch(url, book)
      .map(res => res.json());
  }

  createBook(book): Observable<IBook> {
    console.log(book);

    const url = `${this.restRoot}`;
    return this.http.post(url, book)
      .map(res => res.json());
  }

}

