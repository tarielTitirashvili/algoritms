// array of temperatures in days and need to find warmer ways


function nearestWarmDeyFinder(days) {
  const res = []
  for (let i = 0;i < days.length;i++) {
    for (let k = i;k < days.length;k++) {

      if (days[i] < days[k]) {
        res.push(k - i)
        break
      } else if (i === days.length - 1) {
        res.push(0)
      }
    }
  }
  return res
}

// big O time (n)2
// big O memory n || 1

function nearestWarmDeyFinder1(days) {
  const res = []
  const cash = []
  for (let i = days.length - 1;i >= 0;i--) {
    let currentDay = days[i]
    if (!cash.length) {
      cash.push({
        ind: i,
        value: currentDay
      })
      res[i] = 0
    }

    for (let r = cash.length - 1;r >= 0;r--) {
      const element = cash[r]
      if (element.value < currentDay) {
        cash.pop()
        if (cash.length === 0) {
          res[i] = 0
          cash.push({
            ind: i,
            value: currentDay
          })
        }
      } else if (element.value === currentDay) {
        cash.pop()
        cash.push({
          ind: i,
          value: currentDay
        })
      } else {
        res[i] = element.ind - i
        cash.push({
          ind: i,
          value: currentDay
        })
        break
      }
    }
  }
  return res
}

// big O time (n)2
// big O memory n || 1

console.log(nearestWarmDeyFinder([13, 12, 15, 11, 9, 12, 16])) 
console.log(nearestWarmDeyFinder1([13, 12, 15, 11, 9, 12, 16])) 
