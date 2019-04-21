/**
 * Reduce function is attached to the array prototype
 * It takes in a callback and passes every item in the array
 * through the callback, and also a starting value
 */

/**
 * The callback gets 3 arguments
 * the item, the index and the  execution context
 * 
 */
Array.prototype.newReduce = function (callback, startingValue) {
  // as starting value is an optional param
  // make a check
  let accumulator = startingValue || undefined;
  for (let index = 0; index < this.length; index++) {
    if (accumulator) {
      accumulator = callback.call(accumulator, accumulator, this[index], index, this)
    } else {
      accumulator = this[index]
    }
  }

  return accumulator;
}

const nums = [1, 2, 3, 4, 5]
const sum = nums.newReduce((accum, current) => {
  accum.push(current * 2)
  return accum
}, []);
console.log(sum)

const queryString = "cat=meow&duck=quack&dog=woof";

const queryObject = queryString.split("&").newReduce((accum, current) => {
  const splitString = current.split("=")
  accum[splitString[0]] = splitString[1];
  return accum;
}, {})

console.log(queryObject);