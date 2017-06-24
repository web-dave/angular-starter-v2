* Generate 2 sub Modules (about, books)
* Generate for each of these Modules a Root Component named like the Module
* Import the Modules into your `AppModule` (or use the **protip** while generating)
* use `BooksComponent` in app.component.html and check the devTools


#### hint

<pre>
ng g module books --routing 
ng g module about --routing 
</pre>

#### protip but ther is a bug so be carefull!
<pre>
ng g module books --routing -m=app.modules
ng g module about --routing -m=app.modules
</pre>
<pre>
ng g c books/books
ng g c about/about
</pre>

#### app.component.html
<pre>
  &lt;my-nav>&lt;/my-nav>
  &lt;books>&lt;/books>
  &lt;router-outlet>&lt;/router-outlet>
</pre>

#### books.module.ts 
<pre>
@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [BooksComponent], <-- !!
  declarations: [BooksComponent]
})
export class BooksModule { }
</pre>
