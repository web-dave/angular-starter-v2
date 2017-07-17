import { OrderBtnDirective } from './order-btn.directive';

import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'mock-component',
  template: '<div orderBtn="Kauf Mich!"></div>',
})
class MockComponent {
}

describe('A component with OrderBtnDirective', () => {
  let fixture: ComponentFixture<MockComponent>;
  let element: DebugElement;
  let sut: OrderBtnDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent, OrderBtnDirective],
    });

    fixture = TestBed.createComponent(MockComponent);
    element = fixture.debugElement.query(By.directive(OrderBtnDirective));
    sut = element.injector.get(OrderBtnDirective);
  });

  describe('orderBtn', () => {
    it('should be a button', () => {
      expect(sut.orderBtnElement.tagName).toBe('BUTTON');
    });

    it('should show `Kauf mich`', () => {
      fixture.detectChanges();
      expect(sut.orderBtnElement.innerText).toBe('Kauf Mich!');
    });

    it('should write a console.log if cklicked', () => {
      spyOn(console, 'log');
      sut.orderBtnElement.click();
      expect(console.log).toHaveBeenCalled();
    });
  });
});
