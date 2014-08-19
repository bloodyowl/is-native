var tape = require("tape")
var isNative = require("..")

tape("isNative", function(test){
  function foo(){}
  foo.toString = function(){return toString.toString()}
  test.equal(isNative(foo), false)
  test.equal(isNative(Object.prototype.hasOwnProperty), true)
  toString.toString = function(){return "function(){ return 'nope' }"}
  test.equal(isNative(toString), true)
  test.equal(isNative(null), false)
  test.end()
})
