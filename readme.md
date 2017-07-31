* Install `redux` and `angular-redux`
* create a file `store.ts` with `appSTore` and `rootReducer`
* import redux into your app



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
