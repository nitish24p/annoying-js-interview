function asyncTask() {
  const value = Math.floor(Math.random() * 10)
  return function (callback) {
    setTimeout(() => {
      callback(value)
    }, value * 1000)
  }

}


function asyncParallel(taskList, callback) {
  const results = [];
  let tasksCompleted = 0;
  taskList.forEach(asyncTask => {
    asyncTask((value) => {
      results.push(value);
      tasksCompleted++;

      if (tasksCompleted >= taskList.length) {
        callback.call(null, results)
      }
    })
  });
}

const taskList = [
  asyncTask(),
  asyncTask(),
  asyncTask(),
  asyncTask(),
  asyncTask(),
  asyncTask(),
]

asyncParallel(taskList, (result) => {
  console.log("got the results", result)
})