import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { booksStub, bookMock } from './books.service.stub';
import { it } from '@angular/cli/lib/ast-tools/spec-utils';
import { async, inject, TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';


describe('BooksService', () => {
  beforeEach(() => {
    // setup @ngModule for testing
    TestBed.configureTestingModule({
      providers: [BooksService],
      imports: [HttpClientModule, HttpClientTestingModule]
    });
  });

  // check after each test there is no pending(open) request
  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }))

  it('should be created', inject([BooksService], (service: BooksService) => {
    expect(service).toBeTruthy();
  }));

  it('should return all books', inject([BooksService, HttpTestingController],
    (service: BooksService, backend: HttpTestingController) => {
      // call service method and test IN the subscription. no need to use async anymore!!
      service.getBooks()
        .subscribe(books => {
          expect(books).toEqual(booksStub)
        });
        // Wait for the call and response with mockdata  `.flush()`
        backend.expectOne('http://localhost:4730/books/').flush(booksStub, { status: 200, statusText: 'Ok' });
    }));
    
    it('should return one specific book', inject([BooksService, HttpTestingController],
      (service: BooksService, backend: HttpTestingController) => {
        service.getBook('1234')
          .subscribe(book => {
            expect(book).toEqual(booksStub[0])
          });
          backend.expectOne('http://localhost:4730/books/1234/').flush(booksStub[0], { status: 200, statusText: 'Ok' });
      }));

    it('should update a book', inject([BooksService, HttpTestingController],
      (service: BooksService, backend: HttpTestingController) => {
        service.updateBook(booksStub[0])
          .subscribe(book => {
            expect(book.title).toEqual(booksStub[0].title)
          });
          backend.expectOne(`http://localhost:4730/books/${booksStub[0].isbn}/`).flush(booksStub[0], { status: 200, statusText: 'Ok' });
      }));
      
      it('should create a new book', inject([BooksService, HttpTestingController],
        (service: BooksService, backend: HttpTestingController) => {
          service.createBook(booksStub[0])
            .subscribe(book => {
              expect(book.title).toEqual(booksStub[0].title)
            });
            backend.expectOne('http://localhost:4730/books/').flush(booksStub[0], { status: 200, statusText: 'Ok' });
        }));

});

