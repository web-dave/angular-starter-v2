import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BooksService {
  restRoot = 'http://localhost:4730/books';

  constructor(private http: Http) { }


  getBooks(): Observable<any> {
    const url = this.restRoot;
    return this.http.get(url)
      .map(res => res.json());
  }

}

