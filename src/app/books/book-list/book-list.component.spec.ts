import { DummyComponent, BookPreviewComponent, OrderBtnDirective } from './../shared/components.stubs.spec';
import { RouterTestingModule } from '@angular/router/testing';
import { BooksServiceStub } from './../shared/books.service.stub';
import { BooksService } from '../shared/books.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';


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
