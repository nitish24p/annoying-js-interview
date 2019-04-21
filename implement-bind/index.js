Function.prototype.newBind = function (context) {
  const currentContext = this;
  const currentArguments = Array.prototype.slice.call(arguments, 1); // Dont need the context
  return function () {
    const args = Array.prototype.slice.call(arguments);
    currentContext.apply(context, currentArguments.concat(args))
  }
}

this.x = 9;    // this refers to global "window" object here in the browser
const module = {
  x: 81,
  getX: function () { return this.x; }
};

module.getX(); // 81

const retrieveX = module.getX;
retrieveX();
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global const x with module's property x
const boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81