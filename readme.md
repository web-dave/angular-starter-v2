* Generate a `BookListComponent` into your Books Module
* Set `/books` as a root of ChildRouting
* Check the DevTools and the hints!


#### hint

`ng g c books/book-list`

#### my-nav.component.html
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

<pre>
  &lt;p>
    book works!
  &lt;/p>
  &lt;router-outlet>&lt;/router-outlet>
</pre>

