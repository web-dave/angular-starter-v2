import { Component, Pipe, PipeTransform, Directive, Input, Output, EventEmitter } from '@angular/core';

@Component({
  template: '',
  selector: 'dummy'
})
export class DummyComponent {
}

@Component({
  template: '',
  selector: 'book-preview'
})
export class BookPreviewComponent {
  @Input() book: any;
  @Output() @Output() bookselected = new EventEmitter<any>();
}

@Directive({
  selector: '[orderBtn]'
})
export class OrderBtnDirective {
}

@Pipe({
  name: 'pages'
})
export class PagesPipe implements PipeTransform {
  transform(any) { return any }
}
