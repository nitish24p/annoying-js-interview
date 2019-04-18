/**
 * Filter function is attached to the array prototype
 * It takes in 3 parameters, callback and a context (this)
 * argument, the callback is invoked with the current item
 * the index, the array
 */

/**
 * The callback gets 3 arguments
 * the item, the index and the  current array being traversed
 */
Array.prototype.newFilter = function (callback, context) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    if (callback.call(context, this[index], index, this)) {
      result.push(this[index])
    }
  }

  return result
}

// example
const numbers = [1, 2, 3, 4]
const even = numbers.newFilter(item => item % 2 === 0)

console.log(even)