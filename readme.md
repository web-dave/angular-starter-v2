* Generate a `leave` guard
* implement it as a canDeactivate Guard
* Provide it in your `BooksModule`
* Add it to the new route
* You need a helper to check status of this Component



#### hints
<pre>
  ng g guard books/shared/leave
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

<pre>
    {
      path: 'new',
      component: BookNewComponent,
      canDeactivate: [LeaveGuard]
    },
</pre>

<pre>

  isSaved() {
    return this.saved || !this.form.dirty;
  }
</pre>
