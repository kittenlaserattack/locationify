var tap = require('tap');
var locationify = require('..');
var testData = require('./urls.json');

Object.keys(testData).forEach(function(url) {
  var data = testData[url];
  tap.test('parse ' + url, function (t) {
    t.similar(locationify(url), data);
    // call t.end() when you're done
    t.end();
  });
});

tap.test('blank string - returns function?', function (t) {
  t.ok(typeof locationify('') === 'function');
  t.end();
});

tap.test('no args, returns function?', function (t) {
  var l = locationify();
  t.ok(typeof l === 'function');
  t.end();
});
