* Generate a `order-btn` directive
* It should add a button to buy this Book


#### hints
<pre>
  ng g d books/shared/order-btn
</pre>


#### order-btn.directive.ts
<pre>
 
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
</pre>

#### book-details.component.html
<pre>
  &lt;div class="panel-body" orderBtn="Buy me!!">
    ...
  &lt;/div>
</pre>
