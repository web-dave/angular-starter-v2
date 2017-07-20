import { By } from '@angular/platform-browser';
import { IBook } from '../shared/custom-types';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookPreviewComponent } from './book-preview.component';

describe('BookPreviewComponent', () => {
  let component: BookPreviewComponent;
  let fixture: ComponentFixture<BookPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookPreviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  fit('should raise bookselected event when clicked', () => {
    let bookselected: IBook;
    const expectedHero = component.book;
    component.bookselected.subscribe((book: IBook) => bookselected = book);
    component.selectThisBook();
    expect(bookselected).toBe(expectedHero);
  });

});
