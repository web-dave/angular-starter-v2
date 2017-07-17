import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MyNavComponent } from './my-nav.component';

@Component({
  template: '',
  selector: 'dummy'
})
class DummyComponent {
}
describe('MyNavComponent', () => {
  let component: MyNavComponent;
  let fixture: ComponentFixture<MyNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNavComponent, DummyComponent ],
      imports: [
        RouterTestingModule.withRoutes([{ path: 'edit', component: DummyComponent }])
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
