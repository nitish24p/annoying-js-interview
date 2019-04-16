## Implement Array.map


[Array.map]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map") 

>The map() method creates a new array with the results of calling a provided function on every element in the calling array.

### Question
Implement the `Array.map` method

### Thought process Pseudocode
1. A function which takes a function as an argument
2. The function argument must be passed the array index, the item and the context

### Solution
```javascript
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
    result.push(callback(this[index], index, this))
  }

  return result
}

// example
const numbers = [1, 2, 3, 4]

const double = numbers.myMap((item, index) => {
  return item * 2
})

console.log(double)

``` 
