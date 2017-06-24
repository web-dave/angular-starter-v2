* Generate a `order-btn` directive
* It should add a button to buy this Book


#### hints
<pre>
  ng g d books/shared/order-btn
</pre>


#### order-btn.directive.ts
<pre>
import { Directive, Input, ElementRef, OnChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[orderBtn]'
})
export class OrderBtnDirective implements OnChanges {
  orderBtnElement: HTMLButtonElement = document.createElement('button');
  myObj;
  @Input() orderBtn;

  ngOnChanges(changeObj) {
  
    this.orderBtnElement.innerText = this.orderBtn;
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
      console.log('this.orderBtn:', this.orderBtn)
    }
  }

}

</pre>

#### book-details.component.html
<pre>
  &lt;div class="panel-body" orderBtn="Buy me!!">
    ...
  &lt;/div>
</pre>
