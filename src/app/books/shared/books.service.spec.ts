import {HttpModule} from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([BooksService], (service: BooksService) => {
    expect(service).toBeTruthy();
  }));
});
