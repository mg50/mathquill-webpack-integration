window.jQuery = require('jquery');
require('mathquill/build/mathquill.min.js');
require('style-loader!css-loader!mathquill/build/mathquill.css');
require('file-loader!mathquill/build/font/Symbola.ttf');

module.exports = window.MathQuill;
