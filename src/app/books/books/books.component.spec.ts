import { AboutModule } from './../../about/about.module';
import { AppRoutingModule } from './../../app-routing.module';
import { BookPreviewComponent } from './../book-preview/book-preview.component';
import { BookListComponent } from './../book-list/book-list.component';
import { APP_BASE_HREF } from '@angular/common';
import { BooksRoutingModule } from './../books-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksComponent, BookListComponent, BookPreviewComponent ],
      imports: [AppRoutingModule, BooksRoutingModule, AboutModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
