## Implement Array.filter


[Array.filter]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter") 

>The filter() method creates a new array with all elements that pass the test implemented by the provided function.

### Question
Implement the `Array.filter` method

### Thought process Pseudocode
1. A function which takes a function as an argument and an optional parameter for execution context
2. The function argument must be passed the array index, the item and the context
3. The result of the callback invokation is tested, if true the array element is pushed to a new array item

### Solution
```javascript
/**
 * Filter function is attached to the array prototype
 * It takes in 3 parameters, callback and a context (this)
 * argument, the callback is invoked with the current item
 * the index, the array, 
 */

/**
 * The callback gets 3 arguments
 * the item, the index and the  execution context
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

``` 
