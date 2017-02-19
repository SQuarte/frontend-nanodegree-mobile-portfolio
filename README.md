# Website Performance Optimization portfolio project

## Instalation

Just clone this repository and open in your favorite browser.
Also you can use grunt to automatize some processes(min pics,js,css).

If you have properly configurated environment run 'npm i' and 'grunt' from cmd in project directory.
Here link which help you to install [grunt](http://gruntjs.com/getting-started).


## List of improvements
Here is the list of improvement which i did to accomplish appropriate PageSpeed Score and get rid of janks.


### index.html


* added fonts to style.css and removed fonts request from html.
* inified all used css and js files 
* added media="print" to print.css
* added async attribute to perfmatters.js and analytics.js 
* rewrote analytics.js query to use https
* compressed all images
* resized pizzeria.jpg


### views/js/main.js

* added "use strict" directive
* fixed fsl on scrolling
* fixed fsl on resize pizza images
* added will-change:left,top and transform:translateZ(0) to mover class
* added centered class to style.css
* minified all used css and js files 
* compressed all images
* changed querySelector to getElementById in some places
* reduced the number of background pizzas items
