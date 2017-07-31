import { Observable } from 'rxjs/Observable';
import { IAppState } from './redux/store';
import { Component, ViewEncapsulation } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  @select() formdirty: Observable<boolean>;
  title = 'my';
  constructor(private ngRedux: NgRedux<IAppState>) { }
}
