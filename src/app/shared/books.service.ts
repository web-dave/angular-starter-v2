import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {
  restRoot = 'http://localhost:4730/books';

  constructor(private http: Http) { }


  getBooks() {
    const url = this.restRoot;
    return this.http.get(url)
      .map(res => res.json());
  }

}
