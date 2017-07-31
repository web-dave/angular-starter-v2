* Install `redux` and `angular-redux`
* create a file `store.ts` with `appSTore` and `rootReducer`
* import redux into your app
* setup `store` and `actions`
* setup `rootReducer`
* dispatch `action`
* every input should check Form state on `blur`
* import `NgRedux` into `BookNew` via `DI`
* dispatch a action responsing on the form state
* dont forget to dispatch on save!!
* import `NgRedux` into `LeaveGuard` via `DI`
* read state from store
* import `NgRedux` and `select` into `app.cpmponent.ts`
* import `NgRedux` into `AppCpmponent` via `DI`
* subscribe to `formdirty` via `@select()` 




```sh
npm install --save redux @angular-redux/store
```

#### store.ts
```typescript
export interface IAppState {}

export const appState: IAppState = {}

export function rootReducer(state, action) {
 return state;
}
```

#### app.module.ts
```typescript
import { appState, IAppState, rootReducer } from './redux/store';
...
@NgModule({
 declarations: [...],
 imports: [
   ...,
   NgReduxModule
 ],
 ...
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, appState)

  }

}

```

#### store.ts
```typescript
...
export const FORM_DIRTY = { type: 'FORM_DIRTY' }
export const FORM_PRISTINE = { type: 'FORM_PRISTINE' }
export interface IAppState {
 formdirty: boolean;
}

export const appState: IAppState = {
 formdirty: false
}

```


#### store.ts
```typescript

export function rootReducer(state: IAppState, action): IAppState {
 switch (action) {
   case FORM_DIRTY:
     return { formdirty: true };
   case FORM_PRISTINE:
     return { formdirty: false };
 }
 return state;
}

```


#### book-new.component.html
```html
<form [formGroup]="form" (ngSubmit)="saveBook()" >
 <div class="form-group">
   <label for="title">Title</label>
   <input type="text" id="title" formControlName="title" (blur)="checkForm()">
   <div [hidden]="!form.get('title').hasError('required')">
     Enter a tilte
   </div>
 </div>
```


#### book-new.component.ts
```typescript
import { FORM_DIRTY, FORM_PRISTINE, IAppState } from '../../redux/store';
import { NgRedux } from '@angular-redux/store';
...
@Component({
 selector: 'book-new',
 templateUrl: './book-new.component.html',
 styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
...
  constructor(...,
   private ngRedux: NgRedux<IAppState>
 ) { }
}
```

#### book-new.component.ts
```typescript

 checkForm() {
   if (this.form.dirty) {
     this.ngRedux.dispatch(FORM_DIRTY)
   } else {
     this.ngRedux.dispatch(FORM_PRISTINE)
   }
 }

```

#### book-new.component.ts
```typescript

 saveBook() {
   this.booksService.createBook(this.form.value)
     .subscribe(() => {
       this.ngRedux.dispatch(FORM_PRISTINE)
       this.router.navigate(['/books']);
     });
 }

```

#### leave.guard.ts
```typescript
...
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class LeaveGuard implements CanDeactivate<BookNewComponent> {

  constructor(private ngRedux: NgRedux<IAppState>) { }
  ...
}

```

#### leave.guard.ts
```typescript
...
  canDeactivate(target: BookNewComponent) {
    if (this.ngRedux.getState().formdirty) {
      return window.confirm('Do you really want to cancel?');
    } else {
      return true;
    }
  }
...
```

#### app.component.ts
```typescript
import { IAppState } from './redux/store';
import { NgRedux, select } from '@angular-redux/store';
```

#### app.component.ts
```typescript
constructor(private ngRedux: NgRedux<IAppState>) { }
```

#### app.component.ts
```typescript
@select() formdirty: Observable<boolean>;
```

#### app.component.html
```html
<button class="btn btn-primary" type="button">
  formdirty <span class="badge">{{formdirty | async}}</span>
</button>
```
