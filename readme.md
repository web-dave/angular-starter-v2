* Set `routerLink` in `my-nav`
* Setup routes
* Set `/books` as default
* Set `/about` as fallback


#### hint

<pre>
    &lt;li>&lt;a [routerLink]="['books']">Books&lt;/a>&lt;/li>
    &lt;li>&lt;a [routerLink]="['about']">About&lt;/a>&lt;/li>
</pre>

<pre>
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
</pre>

<pre>
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full' <-- !!
  },
  {
    path: '**', <-- Fallback allways the last route!
    redirectTo: '/about'
  }
</pre>

