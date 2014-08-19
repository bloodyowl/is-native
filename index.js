/*
  1. uses Function.prototype.toString to
  prevent manual override by setting
  fn.toString
*/
var fnToString = Function.prototype.toString
var objectToString = Object.prototype.toString
var isNativeRE = RegExp("^" +
    fnToString.call(objectToString)
      // escape RegExp special chars
      .replace(/([.*+?^=!:$(){}|[\]\/\\])/g, "\\$1")
      .replace(/toString/, ".*?") +
    "$"
  )

module.exports = function(fn){
  if(objectToString.call(fn) != "[object Function]") {
    return false
  }
  // see 1.
  return isNativeRE.test(
    fnToString.call(fn)
  )
}
