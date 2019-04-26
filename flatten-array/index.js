Array.prototype.flatten = function () {
  let flatArray = []
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(this.flatten.call(element))
    } else {
      flatArray.push(element)
    }
  }

  return flatArray;
}

// function flatten



//const nestedArr = [[1], [[1, 4, [5, 3]], [1, 2, 3, 4]]] => [1, 1, 4, 5, 3, 1, 2, 3, 4]

const nestedArr = [[1], [[1, 4, [5, 3]], [1, 2, 3, [3, 4, [2, [22, [3, 4, 5, 6, 5, [2]]]]], 4]]]
//const nestedArr = [1, 2, 3, 4, [1]]

const flat = nestedArr.flatten();
console.log(flat);