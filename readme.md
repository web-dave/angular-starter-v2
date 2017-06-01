* Generate a `nav` component with angular-cli
* Use this new `nav` component in the `appComponnet` view

#### hint

`ng g c my-nav` 

#### my-nav.component.html:
<pre>
&lt;nav class="navbar navbar-inverse">
  &lt;div class="container-fluid">
    &lt;div class="navbar-header">
      &lt;button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
        &lt;span class="sr-only">Toggle navigation&lt;/span>
        &lt;span class="icon-bar">&lt;/span>
        &lt;span class="icon-bar">&lt;/span>
        &lt;span class="icon-bar">&lt;/span>
      &lt;/button>
      &lt;a class="navbar-brand">angular-starter&lt;/a>
    &lt;/div>

    &lt;div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
      &lt;ul class="nav navbar-nav">
        &lt;li>&lt;a>Search&lt;/a>&lt;/li>
        &lt;li>&lt;a>About&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/div>
&lt;/nav>
</pre>

#### app.component.html
<pre>
  <my-nav></my-nav>

  <router-outlet></router-outlet>
</pre
