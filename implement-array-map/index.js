/**
 * Map function is attached to the array prototype
 * It takes in a callback and passes every item in the array
 * through the callback, the result is pushed into a new array
 * which is returned
 */

/**
 * The callback gets 3 arguments
 * the item, the index and the  execution context
 */
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    // This is primarily to check if the item
    // exists in the array, 
    if (this.indexOf(this[index]) > -1) {
      result[index] = callback(this[index], index, this)
    }
  }

  return result
}

// example
const numbers = [1, 2, 3, 4]
numbers[10] = 34;

const double = numbers.myMap((item, index) => {
  return item * 2
})

console.log(double)