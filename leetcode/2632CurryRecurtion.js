var curry = (fn) => {
  let allArgs = []
  return function curried(...args) {
    if(args.length + allArgs.length < fn.length){
      allArgs = [...allArgs, ...args]
      return curried
    }else if(args.length + allArgs.length === fn.length){
      const copyArgs = [...allArgs, ...args]
      allArgs = []
      return fn(...copyArgs)
    }
  }
}

function sum(a, b, c) {
  return a + b + c
}

const curriedSum = curry(sum)

console.log(curriedSum(1, 2)(3)) //6
console.log(curriedSum(1)(2, 3)) //6
console.log(curriedSum(1)(2)(3)) //6
console.log(curriedSum(1, 2, 3)) //6