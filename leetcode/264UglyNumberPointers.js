var nthUglyNumber = function (n) {
  const results = [1]
  let p2Index = 0, p3Index = 0, p5Index = 0
  while (results.length < n) {
    let two = results[p2Index] * 2
    let three = results[p3Index] * 3
    let five = results[p5Index] * 5

    let nextUgly = Math.min(two, three, five)
    if(nextUgly === two) p2Index++
    if(nextUgly === three) p3Index++
    if(nextUgly === five) p5Index++

    results.push(nextUgly)
  }
  return results[n - 1]
}

console.log(nthUglyNumber(10)) // 12
console.log(nthUglyNumber(1)) // 1