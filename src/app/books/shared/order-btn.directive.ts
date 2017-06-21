import { Directive, Input, ElementRef, OnChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[orderBtn]'
})
export class OrderBtnDirective implements OnChanges {
  orderBtnElement: HTMLButtonElement = document.createElement('button');
  myObj;
  @Input() orderBtn;

  ngOnChanges(changeObj) {
    this.myObj = JSON.parse(this.orderBtn);
    console.log(this.orderBtn, this.myObj);
    
    this.orderBtnElement.innerText = this.myObj.label;
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave');
  }

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.appendChild(this.orderBtnElement);
    this.orderBtnElement.onclick = () => {
      console.log('this.orderBtn:', this.myObj.isbn)
    }
  }

}
