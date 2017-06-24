* generate a `book-preview` component
* declair a Input book
* declair a Output bookselected
* show title and isbn in  template
* use `book-preview` in `book-list` template
* click on a button should emit a event with the Book from `book-preview` to `book.list`


#### hints
<pre>
  ng g c books/book-preview
</pre>

#### book-preview.component.ts
<pre>
  @Input() book;
  @Output() bookselected = new EventEmitter();
</pre>

#### book-preview.component.html
<pre>
&lt;ul *ngIf="book">
  &lt;li>{{book.title}}&lt;/li>
  &lt;li>{{book.isbn}} &lt;button (click)="selectThisBook()" class="btn btn-info">show me more&lt;/button>&lt;/li>
&lt;/ul>
</pre>
#### book-preview.component.ts
<pre>
  selectThisBook() {
    this.bookselected.emit(this.book);
  }
</pre>

#### book-list.component.html
<pre>
  &lt;div *ngIf="books">
    &lt;book-preview *ngFor="let book of books" [book]="book" (bookselected)="selectBook($event)">&lt;/book-preview>
  &lt;/div>
</pre>
#### book-list.component.ts
<pre>
  selectBook(book) {
    console.log(book);
  }
</pre>
