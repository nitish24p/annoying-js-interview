Function.prototype.newBind = function (context) {
  const currentContext = this;
  const currentArguments = Array.prototype.slice.call(arguments);
  return function () {
    const args = Array.slice.call(arguments);
    currentContext.apply(context, currentArguments.concat(args))
  }
}

function Hello(firstName, lastname) {
  console.log("hello", firstName, lastname)
}

const newHello = Hello.bind(this, "nitish");
newHello("phanse")