import { IAppState } from '../../redux/store';
import { BookNewComponent } from './../book-new/book-new.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class LeaveGuard implements CanDeactivate<BookNewComponent> {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  canDeactivate(target: BookNewComponent) {
    if (this.ngRedux.getState().formdirty) {
      return window.confirm('Do you really want to cancel?');
    } else {
      return true;
    }
  }
}
