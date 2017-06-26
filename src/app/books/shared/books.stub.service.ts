import { Observable } from 'rxjs';

export class BooksServiceStub {
  getBooks() { return Observable.of([{}]) };
}
