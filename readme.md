* Generate a `book-edit` component
* Add a edit route
* Import `FormsModule` into BooksModule
* Bind book to a template driven form
* extend the service to save edited book


#### hints
<pre>
  ng g d books/book-edit
</pre>

<pre>
    {
      path: ':isbn/edit',
      component: BookEditComponent
    }
</pre>

<pre>
  &lt;a [routerLink]="['edit']" class="btn btn-default btn-sm">
    &lt;span class="glyphicon glyphicon-pencil" aria-hidden="true">&lt;/span>
  &lt;/a>
</pre>


<pre>
  import { FormsModule } from '@angular/forms';

  import ...

  @NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ],
  exports: [],
  declarations: [...],
  providers: [...]
  })
  export class BooksModule { }

</pre>

<pre>
  &lt;div>
    &lt;button type="submit" [disabled]="form.invalid">Save&lt;/button>
    &lt;a class="btn btn-default btn-sm" [routerLink]="['..']">
      &lt;span class="glyphicon glyphicon-remove" aria-hidden="true">&lt;/span>
    &lt;/a>
  &lt;/div>
</pre>

<pre>
  updateBook(book): Observable<IBook> {
    const url = `${this.restRoot}/${book.isbn}`;
    return this.http.patch(url, book)
      .map(res => res.json());
  }
</pre>
