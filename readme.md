* Generate a `leave` guard
* implement a canDeactivate Guard
* Add it to the new route
* You need a helper to check status of this Component



#### hints
<pre>
  ng g guard books/shared/leave
</pre>

<pre>
    {
      path: 'new',
      component: BookNewComponent,
      canDeactivate: [LeaveGuard]
    },
</pre>

<pre>
import { BookNewComponent } from './../book-new/book-new.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class LeaveGuard implements CanDeactivate&lt;BookNewComponent> {
 canDeactivate(target: BookNewComponent) {
   if (!target.isSaved()) {
     return window.confirm('Do you really want to cancel?');
   } else {
     return true;
   }
 }
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
