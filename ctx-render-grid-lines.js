module.exports = gridlines;

var min = Math.min;
var max = Math.max;
var abs = Math.abs;

function gridlines(ctx, spacing, minx, miny, maxx, maxy) {
  var lx = min(minx, maxx);
  var ly = min(miny, maxy);
  var ux = max(minx, maxx);
  var uy = max(miny, maxy);

  spacing = abs(spacing|0);

  if (!spacing) {
    return;
  }

  for (var x = lx; x <= ux; x += spacing) {
    ctx.moveTo(x, ly);
    ctx.lineTo(x, uy);
  }

  for (var y = ly; y <= uy; y += spacing) {
    ctx.moveTo(lx, y);
    ctx.lineTo(ux, y);
  }
}
