// var curry = (fn) => {
//   let allArgs = []
//   return function curried(...args) {
//     allArgs = [...allArgs, ...args]
//     if (allArgs.length === fn.length) {
//       const result = fn(...allArgs)
//       allArgs = []
//       return result
//     } else
//       return curried
//   }
// }

var curry = (fn) => {
  return function curried(...args) {
    if(args.length === fn.length){
      return fn(...args)
    }else
      return function (...newArgs) {
        return curried(...args, ...newArgs)
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