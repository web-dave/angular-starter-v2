import { BooksService } from '../shared/books.service';
import { BooksServiceStub } from './../shared/books.service.stub';
import { RouterTestingModule } from '@angular/router/testing';
import { PagesPipe } from './../shared/pages.pipe';
import { Component } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';

@Component({
  template: '',
  selector: 'dummy'
})
class DummyComponent {
}

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookDetailsComponent,
        PagesPipe,
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
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
