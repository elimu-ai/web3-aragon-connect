const { createCanvas } = require('canvas')

const identiconCanvas = address => {
  var randseed = new Array(4);

  function seedrand(seed) {
    for (var i = 0; i < randseed.length; i++) {
      randseed[i] = 0;
    }
    for (var i = 0; i < seed.length; i++) {
      randseed[i % 4] = ((randseed[i % 4] << 5) - randseed[i % 4]) + seed.charCodeAt(i);
    }
  }

  function rand() {
    var t = randseed[0] ^ (randseed[0] << 11);

    randseed[0] = randseed[1];
    randseed[1] = randseed[2];
    randseed[2] = randseed[3];
    randseed[3] = (randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8));

    return (randseed[3] >>> 0) / ((1 << 31) >>> 0);
  }

  function createColor() {
    var h = Math.floor(rand() * 360);
    var s = ((rand() * 60) + 40) + '%';
    var l = ((rand() + rand() + rand() + rand()) * 25) + '%';

    var color = 'hsl(' + h + ',' + s + ',' + l + ')';
    return color;
  }

  function createImageData(size) {
    var width = size;
    var height = size;

    var dataWidth = Math.ceil(width / 2);
    var mirrorWidth = width - dataWidth;

    var data = [];
    for (var y = 0; y < height; y++) {
      var row = [];
      for (var x = 0; x < dataWidth; x++) {
        row[x] = Math.floor(rand() * 2.3);
      }
      var r = row.slice(0, mirrorWidth);
      r.reverse();
      row = row.concat(r);

      for (var i = 0; i < row.length; i++) {
        data.push(row[i]);
      }
    }

    return data;
  }

  function buildOpts(opts) {
    var newOpts = {};

    newOpts.seed = address || Math.floor((Math.random() * Math.pow(10, 16))).toString(16);

    seedrand(newOpts.seed);

    newOpts.size = opts.size || 8;
    newOpts.scale = opts.scale || 9;
    newOpts.color = opts.color || createColor();
    newOpts.bgcolor = opts.bgcolor || createColor();
    newOpts.spotcolor = opts.spotcolor || createColor();

    return newOpts;
  }

  function renderIcon(opts, canvas) {
    opts = buildOpts(opts || {});
    var imageData = createImageData(opts.size);
    var width = Math.sqrt(imageData.length);

    canvas.width = canvas.height = opts.size * opts.scale;

    var cc = canvas.getContext('2d');
    cc.fillStyle = opts.bgcolor;
    cc.fillRect(0, 0, canvas.width, canvas.height);
    cc.fillStyle = opts.color;

    for (var i = 0; i < imageData.length; i++) {

      if (imageData[i]) {
        var row = Math.floor(i / width);
        var col = i % width;

        cc.fillStyle = (imageData[i] == 1) ? opts.color : opts.spotcolor;
        cc.fillRect(col * opts.scale, row * opts.scale, opts.scale, opts.scale);
      }
    }
    return canvas;
  }

  function createIcon(opts) {
    var canvas = createCanvas(opts.size * opts.scale, opts.size * opts.scale);

    renderIcon(opts, canvas);

    return canvas;
  }

  return createIcon({ size: 8, scale: 9 });
}

module.exports = identiconCanvas
