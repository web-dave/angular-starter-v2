## Install bootstrap
* install bootstrap
* use it in your project

#### every change on the project settings need a fresh `ng serve`  

### hint

`npm i --save bootstrap jquery`

#### .angular-cli.json:
<pre>
...
      "styles": [
        "styles.scss",
        "../node_modules/bootstrap/dist/css/bootstrap.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/bootstrap/dist/js/bootstrap.js"
      ],
...
</pre>
