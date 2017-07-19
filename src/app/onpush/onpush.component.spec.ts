import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushComponent } from './onpush.component';

describe('OnpushComponent', () => {
  let component: OnpushComponent;
  let fixture: ComponentFixture<OnpushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnpushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
