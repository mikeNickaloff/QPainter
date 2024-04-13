# QPainter
Quick CSS-Houdini Painter API Library (QPainter)

The very first of its kind - the simple to use API for CSS-Houdini Paint API.

Why?  Well, because I felt like making it. 

I think it still leaves much to be desired in its current state and does not really have any high-level graphics APIs, so its not really useful to anyone except for people who know how to use the Paint API already and are sick of creating all that boilerplate code.

# API:

## sets up the painter as myvar;

 > var myvar = new QPainter(painterUuid, selector, dimensions, properties)
 
## Tell it what to put inside of paint(ctx, size, properties)

> myvar.paint = &#96;ctx.fillStyle = 'red'; ctx.fill();&#96;
 
 ## adds it to the document.
 
 > myvar.renderQPainter();
 

## Example Usage:

<pre>
  /* document head */
<script type="module">
   
   /* import module */
	import QPainter from './qpainter.js'
	import renderQPainter from './qpainter.js'

/* create QPainter object */
	var myPainter = new QPainter('circlediv', '.navbutton', { width: 100, height: 100 }, ['--circle-color']);
	

/* tell QPainter what to paint */
	myPainter.paint = `
		   const color = properties.get('--circle-color');
							ctx.fillStyle = color;
							ctx.beginPath();
							ctx.arc(size.width / 2, size.height / 2, size.width / 2, 0, 2 * Math.PI);
							ctx.fill();
		`

 /* generate boilerplate */
		myPainter.renderQPainter();
   
   
</script>

/* html */
  `<div id="button01" class="navbutton">Press Me</div>`


</pre>

