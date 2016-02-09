Website Optimization

1. For the pagespeed insights optimization open the link
   https://developers.google.com/speed/pagespeed/insights/

2. Enter following link into where it says "Enter a web page URL"

   http://jasoncasares.github.io/frontend-nanodegree-mobile-portfolio/dist/index.html

3. To check frame rate at 60fps of next project open link 

	http://jasoncasares.github.io/frontend-nanodegree-mobile-portfolio/src/views/pizza.html

4. Open up Chrome Developer tools and record timline

Steps Used for Website Optimization

1.  Gulp.js was used to minify, inline, and resize/compress 
    images for src/index.html
2.	made script to optimize Google Fonts

Following Changed for Optimizing src/views/pizza.html to 60 fps

1.	line 400:add 'use strict'
2.	change document.querySelector to document.getElementById()
3.	line 459-463:
	changed array and created var container outside loop 
4.	line 526: changed array length
5.	line 535: move var phase outside loop
6.	line 462: var numberOfPizzas using height property*col
	to reduce number of pizzas
7.  line 563: move var element outside of loop

Changed src/views/css/style.css

1.	used vendor prefix to optimize .mover




