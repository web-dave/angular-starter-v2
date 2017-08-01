* create `ngsw` folder 
* create `plugins` folder
* copy `basic.js`
* fix the imports
* install dependencies
* setup script
* add build script to `package.json`
* test it

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
npm run build-prod
```

