* create `ngsw` folder 
* create `plugins` folder
* copy `basic.js`
* fix the imports
* install dependencies
* setup script
* add build script to `package.json`
* create a `clickNotification.js`
* it exports a class and a function `code below`
* register eventhandler for `notificationclick` and `notificationclose`
* register `ClickNotification` as a plugin in your ServiceWorker
* build and test it.

#### everthing should work no changes until now

```sh
mkdir src/ngsw
mkdir scr/ngsw/plugins
```

copy 
`@angular/service-worker/worker/builds/basic.js`
 to
`src/ngsw/basic.js`

```typescript
import { bootstrapServiceWorker } from '@angular/service-worker/worker';
import { Dynamic, FreshnessStrategy, PerformanceStrategy } from '@angular/service-worker/plugins/dynamic';
import { ExternalContentCache } from '@angular/service-worker/plugins/external';
import { RouteRedirection } from '@angular/service-worker/plugins/routes';
import { StaticContentCache } from '@angular/service-worker/plugins/static';
import { Push } from '@angular/service-worker/plugins/push';
```


```sh
npm i -D rollup rollup-plugin-commonjs rollup-plugin-node-resolve
```

```sh
touch src/ngsw/build-ngsw.js
```

#### build-ngsw.js
```javascript
// imports
const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonJs = require('rollup-plugin-commonjs');

rollup.rollup({
 entry: './src/ngsw/basic.js',
 plugins: [
   nodeResolve({jsnext: true, main: true}),
   commonJs({
     include: 'node_modules/**',
     namedExports: {
       'node_modules/jshashes/hashes.js': ['SHA1']
     }
   }),
 ],
}).then(bundle => bundle.write({
 format: 'iife',
 dest: 'dist/worker-basic.min.js',
}));

```
```json
   "build-prod": "ng build --prod && npm run build-ngsw",
   "build-ngsw": "node src/ngsw/build-ngsw.js"

```

```sh
touch src/ngsw/plugins/clickNotification.js
```
#### clickNotification.js

```javascript

export function ClickNotification () {
  return (worker) => new ClickNotificationImpl(worker);
}

export class ClickNotificationImpl {

  setup (ops) {}

  constructor (sw) {}

}

```

#### basic.js

```javascript
...
import { ClickNotification } from './plugins/clickNotification';
bootstrapServiceWorker({
  manifestUrl: 'ngsw-manifest.json',
  plugins: [
    StaticContentCache(),
    Dynamic([
      new FreshnessStrategy(),
      new PerformanceStrategy(),
    ]),
    ExternalContentCache(),
    RouteRedirection(),
    Push(),
    ClickNotification()
  ],
});
```

#### clickNotification,js

```javascript
  notificationclick(){
    self.addEventListener('notificationclick', function (event) {
      console.log('notificationclick: ', event);
    });
  }
```

#### clickNotification,js

```javascript
  notificationclose(){
    self.addEventListener('notificationclose', function (event) {
      console.log('notificationclose');
    });
  }
```

#### clickNotification,js

```javascript

  constructor(sw) {
    this.notificationclick();
    this.notificationclose();
  }
```

```sh
npm run build-ngsw
```
