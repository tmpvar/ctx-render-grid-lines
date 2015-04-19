var center = require('ctx-translate-center');
var gridlines = require('./ctx-render-grid-lines');

var ctx = document.createElement('canvas').getContext('2d');

document.body.appendChild(ctx.canvas);

ctx.fillStyle = "black";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

center(ctx);

ctx.beginPath()
  gridlines(ctx, 10, -50, -50, 50, 50);
  ctx.strokeStyle = 'red';
  ctx.stroke();
