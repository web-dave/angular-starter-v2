* Take a look at one Book Object [Link](http://localhost:4730/books/978-0-20163-361-0)
* Generate a interface `custom-types`
* Define two interface in this file
* Use this interface as a type whenever we handle Books


#### hints
<pre>
  ng g interface books/shared/custom-types
</pre>


#### custom-types.ts
<pre>
export interface IBook {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: IUser;
}

export interface IUser {
  name: string;
  url: string;
}
</pre>
#### e.g.
<pre>
  books: IBook[];
  @Input() book: IBook;
</pre>
