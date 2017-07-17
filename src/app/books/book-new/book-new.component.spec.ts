import {BooksServiceStub} from '../shared/books.service.stub';
import { Component } from '@angular/core';
import {BooksService} from '../shared/books.service';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { BookNewComponent } from './book-new.component';

@Component({
  template: '',
  selector: 'dummy'
})
class DummyComponent {
}

describe('BookNewComponent', () => {
  let component: BookNewComponent;
  let fixture: ComponentFixture<BookNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNewComponent, DummyComponent ],
      imports: [
        RouterTestingModule.withRoutes([{ path: 'edit', component: DummyComponent }]),
        ReactiveFormsModule
      ],
      providers: [{ provide: BooksService, useClass: BooksServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
