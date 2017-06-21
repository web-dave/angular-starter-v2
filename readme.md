* Generate a `book-edit` component
* Add a edit route
* Import `FormsModule` into BooksModule
* Bind book to a template driven form
* extend the service to save edited book


#### hints
<pre>
  ng g c books/book-edit
</pre>

##### books-routuing.module.ts
<pre>
    {
      path: ':isbn/edit',
      component: BookEditComponent
    }
</pre>

##### book-details.component.html
<pre>
  &lt;a [routerLink]="['edit']" class="btn btn-default btn-sm">
    &lt;span class="glyphicon glyphicon-pencil" aria-hidden="true">&lt;/span>
  &lt;/a>
</pre>

##### books.module.ts
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

##### books/book-edit.component.html
<pre>
  &lt;form *ngIf="book" #form="ngForm" (ngSubmit)="saveBook(form.value)">
    &lt;div class="form-group">
        &lt;label for="title">Title&lt;/label>
        &lt;input 
          type="text" 
          id="title" 
          name="title" 
          required minlength="6" 
          [(ngModel)]="book.title" 
          #title="ngModel">
        &lt;div [hidden]="!title.errors?.required || title.pristine">Enter a Title&lt;/div>
    &lt;/div>
      ...
    &lt;div>
      &lt;button type="submit" [disabled]="form.invalid">Save&lt;/button>
      &lt;a class="btn btn-default btn-sm" [routerLink]="['..']">
    &lt;span class="glyphicon glyphicon-remove" aria-hidden="true">&lt;/span>
      &lt;/a>
    &lt;/div>

  &lt;/form>

</pre>

##### book.service.ts
<pre>
  updateBook(book): Observable<IBook> {
    const url = `${this.restRoot}/${book.isbn}`;
    return this.http.patch(url, book)
      .map(res => res.json());
  }
</pre>
