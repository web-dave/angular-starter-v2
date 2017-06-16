import { BookNewComponent } from './../book-new/book-new.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeaveGuard implements CanDeactivate<BookNewComponent> {
  canDeactivate(target: BookNewComponent) {
    console.log(target.form.dirty);

    if (target.form.dirty) {
      return window.confirm('Do you really want to cancel?');
    } else {
      return true;
    }
  }
}
