var test = require('tape');
var gridlines = require('./ctx-render-grid-lines');

test('basic', function(t) {
  var calls = 0;
  var ctx = {
    moveTo: function() {
      calls++;
    },
    lineTo : function() {
      calls ++;
    }
  };

  gridlines(ctx, 10, -50, -50, 50, 50);

  t.equal(calls, 44);
  t.end();
});

test('invert upper and lower', function(t) {
  var calls = 0;
  var ctx = {
    moveTo: function() {
      calls++;
    },
    lineTo : function() {
      calls ++;
    }
  };

  gridlines(ctx, 10, 50, 50, -50, -50);

  t.equal(calls, 44);
  t.end();
});

test('invert upper and lower + negative spacing', function(t) {
  var calls = 0;
  var ctx = {
    moveTo: function() {
      calls++;
    },
    lineTo : function() {
      calls ++;
    }
  };

  gridlines(ctx, -10, 50, 50, -50, -50);

  t.equal(calls, 44);
  t.end();
});

test('invert upper and lower + 0 spacing', function(t) {
  var calls = 0;
  var ctx = {
    moveTo: function() {
      calls++;
    },
    lineTo : function() {
      calls ++;
    }
  };

  gridlines(ctx, 0, 50, 50, -50, -50);

  t.equal(calls, 0);
  t.end();
});
