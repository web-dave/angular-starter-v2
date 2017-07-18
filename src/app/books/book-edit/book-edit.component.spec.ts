import { DummyComponent } from './../shared/components.stubs';
import {BooksServiceStub} from '../shared/books.service.stub';
import {BooksService} from '../shared/books.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';


describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookEditComponent, DummyComponent ],
      imports: [
        RouterTestingModule.withRoutes([{ path: 'edit', component: DummyComponent }]),
        FormsModule
      ],
      providers: [{ provide: BooksService, useClass: BooksServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
