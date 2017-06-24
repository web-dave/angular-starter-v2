* Generate a `book-list` component with angular-cliI
* Inject `BooksService` into `BookListComponent` (DI)
* use `BooksService` in ngOnInit
* show all Books in a list


#### hints
<pre>
  ng g c books/book-list
</pre>

#### book-list.component.ts
<pre>
  constructor(private booksService: BooksService) { }
</pre>

<pre>
  ngOnInit() {
    this.booksService.getBooks().subscribe(books => this.books = books);
  }
</pre>

#### book-list.component.html
<pre>
  &lt;ul *ngIf="books">
    &lt;li *ngFor="let book of books">{{book.title}}&lt;/li>
  &lt;/ul>
</pre>
