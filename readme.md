* Generate a `preload-delayed` class
* Import `PreloadingStrategy`and `Route`
* Provide it in your `AppMocule`
* Implement `PreloadingStrategy`, `preload()`
* add some data to  your routes 
* set preloadingSTrategy in routingModule



#### hints
<pre>
  ng g class shared/preload-delayed
</pre>

<pre>
  providers: [PreloadDelayedService],
</pre>

<pre>
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';

export class PreloadDelayedService {


  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    console.log(route.data.preload);

    if ((route.data !== undefined) && (route.data.preload)) {
      return Observable.of(true).delay(3000).flatMap(() => fn());
    }
    if (route.data.preload) {
      return fn();
    }

  }
}
</pre>

<pre>
   {
    path: 'books',
    loadChildren: './books/books.module#BooksModule',
    data: {
      preload: true
    }
  },
</pre>

<pre>

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadDelayedService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
</pre>
