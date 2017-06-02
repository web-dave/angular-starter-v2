import { Directive, Input, ElementRef  } from '@angular/core';

@Directive({
  selector: '[orderBtn]'
})
export class OrderBtnDirective {

  @Input()
  set orderBtn(value: string) {
    this.orderBtnElement.innerText = value;
    this.orderBtnElement.onclick = () => {
      console.log('buy me!!!')
    }
  }
  orderBtnElement: HTMLButtonElement = document.createElement('button');
  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.appendChild(this.orderBtnElement);
  }

}
