import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';

export class PreloadDelayedService implements PreloadingStrategy {


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
