# ctx-render-grid-lines

plot grid lines in html5 canvas

## install

`npm install ctx-render-grid-lines`

## use

__gridlines__(`ctx`, `spacing`, `minX`, `minY`, `maxX`, `maxY`)

* `ctx` - a CanvasRenderingContext2D instance
* `spacing` - the distance between the grid lines
* `minX` - minimum x value in bounding rectangle 
* `minY` - minimum y value in bounding rectangle 
* `maxX` - maximum x value in bounding rectangle 
* `maxY` - maximum y value in bounding rectangle 

### example

```javascript
var center = require('ctx-translate-center');
var gridlines = require('ctx-render-grid-lines');

var ctx = document.createElement('canvas').getContext('2d');

document.body.appendChild(ctx.canvas);

ctx.fillStyle = "black";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

center(ctx);

ctx.beginPath()
  gridlines(ctx, 10, -50, -50, 50, 50);
  ctx.strokeStyle = 'red';
  ctx.stroke();
```

which results in:

![centered red grid](http://i.imgur.com/iGzo02W.png)

## license

[MIT](LICENSE.txt)
