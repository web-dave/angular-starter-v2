* Generate a `book-new` component
* Add a new route
* Import `ReactiveFormsModule` into BooksModule
* Import `Validators`, `FormBuilder` and `FormGroup` into `BookNewComponent` 
* Instantiate `FormBuilder` in a attribute via DI
* define a attribute `form` with type `FormGroup`
* Create a Form Model with `FormBuilder`
* Extend BooksService to save new Book



#### hints
<pre>
  ng g d books/book-new
</pre>

<pre>
    {
      path: 'new',
      component: BookNewComponent
    }
</pre>

##### books/book-list.component.html
<pre>
  &lt;a [routerLink]="['new']" class="btn btn-default btn-sm">
    &lt;span class="glyphicon glyphicon-plus" aria-hidden="true">&lt;/span>
  &lt;/a>
</pre>


<pre>
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  import ...

  @NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [...],
  providers: [...]
  })
  export class BooksModule { }

</pre>

##### books/book-new.component.ts
<pre>
  import { Validators, FormBuilder, FormGroup } from '@angular/forms';
  @Component({
    selector: 'book-new',
    ...
  })
  export class BookNewComponent implements OnInit {
    form: FormGroup;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.form = this.formBuilder.group({
        title: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        isbn: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        publisher: this.formBuilder.group({
          name: ['', Validators.required],
          url: ['', Validators.required]
        })
      });
    }

  }
</pre>

##### books/book-new.component.html
<pre>
&lt;form [formGroup]="form" (ngSubmit)="saveBook()">
  &lt;div class="form-group">
    &lt;label for="title">Title&lt;/label>
    &lt;input type="text" id="title" formControlName="title">
    &lt;div [hidden]="!form.get('title').hasError('required')">
      Enter a tilte
    &lt;/div>
  &lt;/div>
  &lt;div class="form-group">

    &lt;label for="isbn">ISBN&lt;/label>
    &lt;input type="text" id="isbn" formControlName="isbn">
  &lt;/div>
  &lt;fieldset formGroupName="publisher">
    &lt;div class="form-group">
      &lt;label>Name:&lt;/label>
      &lt;input type="text" formControlName="name">
    &lt;/div>
    &lt;div class="form-group">

      &lt;label>Url:&lt;/label>
      &lt;input type="text" formControlName="url">
    &lt;/div>

  &lt;/fieldset>

  &lt;div [hidden]="!form.get('isbn').hasError('isbn')">
    Not a valid ISBN
  &lt;/div>

  &lt;button type="submit" [disabled]="form.invalid">Save&lt;/button>
&lt;/form>

</pre>
<pre>
  createBook(book): Observable<IBook> {
    const url = `${this.restRoot}`;
    return this.http.post(url, book)
      .map(res => res.json());
  }
</pre>
