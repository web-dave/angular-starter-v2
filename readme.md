* Generate a `preload-delayed` class
* Import `PreloadingStrategy`and `Route`
* Provide it in your `AppMocule`
* Implement `PreloadingStrategy`, `preload()`
* add some data to  your routes 
* set preloadingStrategy in routingModule



#### hints
<pre>
  ng g class shared/preload-delayed
</pre>

#### app.module.ts
<pre>
  providers: [PreloadDelayedService],
</pre>

#### preloadDelayed.class.ts
<pre>
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';

export class PreloadDelayedService implements PreloadingStrategy {


  preload(route: Route, fn: () => Observable<any>): Observable<any> {

    if (route.data !== undefined) {
      if (route.data.preload) {
        return Observable.of(true).delay(3000).flatMap(() => fn());
      }

    } else {
        return fn();
    }
  }

}

</pre>

#### app-routing.module.ts
<pre>
   {
    path: 'books',
    loadChildren: './books/books.module#BooksModule',
    data: {
      preload: true
    }
  },
</pre>

#### app-routing.module.ts
<pre>

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadDelayedService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
</pre>
