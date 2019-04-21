/**
 * Every function is attached to the array prototype
 * It takes in a callback and passes every item in the array
 * through the callback
 */

/**
 * The callback gets 3 arguments
 * the item, the index and the  execution context
 * 
 */
Array.prototype.newEvery = function (callback, context) {
  // as starting value is an optional param
  // make a check
  for (let index = 0; index < this.length; index++) {
    if (!callback.call(context, this[index], index, this))
      return false
  }

  return true
}

const nums = [1, 2, 3, 4, 5]
const isLessThanSix = nums.newEvery((item, current) => item > 6);
console.log(isLessThanSix)
