* Generate a `book-details` component
* Click on a `book-preview` should bring you to this `book-details` component (`RoutParams`)
* Get the Book from the Service and show all Details
* You need a new Route.


#### hints
<pre>
  ng g c books/book-details
</pre>


#### book-list.component.ts
<pre>
 constructor(
    private booksService: BooksService, 
    private router: Router) { }

  selectBook(book: IBook) {
    this.router.navigate(['/books', book.isbn]);
  }
</pre>
#### books-routing.module.ts
<pre>
  children: [{
      path: '',
      component: BookListComponent
    }, {
      path: ':isbn',
      component: BookDetailsComponent
    }]
</pre>

#### book-details.component.ts
<pre>
  constructor(
      private booksService: BooksService,
      private router: Router,
      private route: ActivatedRoute) { }


  ngOnInit() {
    this.route
      .params
      .subscribe((params: {isbn: string}) => {
        this.booksService.getBook(params.isbn)
          .subscribe(b => {
            console.log('!!', b);
            this.book = b;
          });
      });
  }
</pre>

#### book-details.component.html (example)
<pre>
&lt;div class="panel panel-default" *ngIf="book" >
   &lt;div class="panel-heading">{{book.title}} ({{book.isbn}})&lt;/div>
  &lt;div class="panel-body">
    &lt;p>{{book.abstract}}  &lt;span class="badge">Seitenzahl: {{book.numPages}}&lt;/span> &lt;/p>
    &lt;p>{{book.publisher.name}} ({{book.publisher.url}})&lt;/p>
  &lt;/div>
  &lt;div class="panel-footer">{{book.author}}&lt;/div>
&lt;/div>
</pre>
