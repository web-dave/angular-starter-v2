* install bookmonkey-api
* setup a npm script rest
* check the api (http://localhost:4730/)
* run bookmonkey-api in seperate cmd
* Generate a `books` service in a shared folder of `BooksModule`
* import Http from @angular/http and inject it (DI)


#### hints
<pre>
  npm i --save-dev bookmonkey-api
  ng g service books/shared/books -m=books/books.module
</pre>

#### package.json:
<pre>
...
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "rest": "bookmonkey-api"
  },
  ...
</pre>
 `npm run rest`
#### API:
<pre>
GET     /books          // Get all books
GET     /books/:isbn    // Get a specific book by ISBN
POST    /books          // Create a new book
PUT     /books/:isbn    // Update a book by ISBN
DELETE  /books/:isbn    // Delete a book by ISBN
</pre>

<pre>
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


  restRoot = 'http://localhost:4730/books';

  constructor(private http: Http) { }


  getBooks() {
    const url = this.restRoot;
    return this.http.get(url)
      .map(res => res.json());
  }
</pre>
