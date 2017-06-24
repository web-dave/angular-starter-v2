* Generate a `BookListComponent` into your Books Module
* Set `/books` as a root of ChildRouting
* Don't forget to add a `router-outlet` to `books` Component
* Check the DevTools and the hints!


#### hint

`ng g c books/book-list`

#### app-routing.module.ts
<pre>
const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    children: [{
      path: '',
      component: BookListComponent
    }]
  },
  ...
];
</pre>

#### books.component.html
<pre>
  &lt;p>
    book works!
  &lt;/p>
  &lt;router-outlet>&lt;/router-outlet>
</pre>

