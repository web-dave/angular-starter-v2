import { HttpClient } from '@angular/common/http';
import { IBook } from './custom-types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {
  restRoot = 'http://localhost:4730/books/';

  constructor(private http: HttpClient) { }


  getBooks(): Observable<IBook[]> {
    const url = this.restRoot;
    return this.http.get<IBook[]>(url);
  }

  getBook(isbn): Observable<IBook> {
    const url = `${this.restRoot}${isbn}/`;
    return this.http.get<IBook>(url);
  }

  updateBook(book): Observable<IBook> {
    const url = `${this.restRoot}${book.isbn}/`;
    return this.http.patch<IBook>(url, book);
  }

  createBook(book): Observable<IBook> {
    const url = `${this.restRoot}`;
    return this.http.post<IBook>(url, book);
  }

}

