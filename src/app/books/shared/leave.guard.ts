import { BookNewComponent } from './../book-new/book-new.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class LeaveGuard implements CanDeactivate<BookNewComponent> {
  canDeactivate(target: BookNewComponent) {

    if (!target.isSaved()) {
      return window.confirm('Do you really want to cancel?');
    } else {
      return true;
    }
  }
}
