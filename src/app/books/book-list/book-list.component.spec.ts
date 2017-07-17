import { RouterTestingModule } from '@angular/router/testing';
import { BooksServiceStub } from './../shared/books.service.stub';
import { BookPreviewComponent } from '../book-preview/book-preview.component';
import { OrderBtnDirective } from '../shared/order-btn.directive';
import { BooksService } from '../shared/books.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { BookListComponent } from './book-list.component';

@Component({
  template: '',
  selector: 'dummy'
})
class DummyComponent {
}

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookListComponent,
        BookPreviewComponent,
        OrderBtnDirective,
        DummyComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([{ path: 'edit', component: DummyComponent }])
      ],
      providers: [{ provide: BooksService, useClass: BooksServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should recieve 3 Books', () => {
    expect(component.books.length).toBe(3);
  });
});
