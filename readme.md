* copy `/books` routing rules to `books-routing.module`
* and set `path: 'books'` to  `path: ''`
* In `app-routing.module` set `/books` to loadChildren
* Remove `BooksModule` from `AppModule` (completely)


#### hint

<pre>
const routes: Routes = [
   {
    path: '',
    component: BooksComponent,
    children: [{
      path: '',
      component: BookListComponent
    }]
  }
];
</pre>

<pre>
const routes: Routes = [
  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule'
  },
  ...
];
</pre>
