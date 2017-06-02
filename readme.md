* Generate a `pages` pipe


#### hints
<pre>
  ng g pipe books/shared/pages
</pre>


#### pages.pipe.ts
<pre>
    transform(value: any, args?: any): any {
      return `${args}: ${value}`;
    }
</pre>

#### book-details.component.html
<pre>
  &lt;span class="badge">{{book.numPages | pages:'Seitenzahl'}}&lt;/span>
</pre>
