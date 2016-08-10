var callback = require(process.argv[2]);
var test = require('tape');
test("Callback 5 times", function(t) {
  t.plan(5);
  callback(5, function () {
    t.pass('callback called');
  });
});
