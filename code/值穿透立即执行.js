var promise = new Promise((resolve, reject) => {
    console.log(1)
})
promise.then(console.log(2))
console.log(3)


Promise.resolve(4)
  .then(5)
  .then(Promise.resolve(6))
  .then(console.log)