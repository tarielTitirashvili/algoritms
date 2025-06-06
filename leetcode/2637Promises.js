var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => { reject('Time Limit Exceeded') }, t)
      fn(...args)
        .then(res => resolve(res))
        .catch(err => reject(err))
        .finally(() => clearTimeout(timeout))
    })
  }
}

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100)
limited(150).catch(console.log) // "