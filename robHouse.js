function smartRobbersPath(houses) {
  if (houses.length === 0) return 0
  if (houses.length === 1) return houses[0]
  const maxPointers = []
  maxPointers[0] = houses[0]
  maxPointers[1] = Math.max(houses[0], houses[1])
  for (let i = 2;i < houses.length;i++) {
    maxPointers[i] = Math.max(maxPointers[i-1], houses[i] + maxPointers[i-2] )
  }
  return maxPointers[maxPointers.length-1]
}

console.log(smartRobbersPath([1, 2, 3, 1]))
console.log(smartRobbersPath([5, 2, 4, 6]))
console.log(smartRobbersPath([2, 7, 9, 3, 1, 6]))
console.log(smartRobbersPath([4, 11, 10, 2, 1, 8, 5]))

function smartRobbersPathMemoryOptimized(houses) {
  if (houses.length === 0) return 0
  if (houses.length === 1) return houses[0]
  let [pointer0, pointer1, pointer2] = [houses[0], Math.max(houses[0], houses[1])]
  for (let i = 2;i < houses.length;i++) {
    pointer2 = Math.max(pointer1, houses[i] + pointer0)
    pointer0 = pointer1
    pointer1 = pointer2
  }
  return maxPointers[maxPointers.length-1]
}

console.log(smartRobbersPath([1, 2, 3, 1]))
console.log(smartRobbersPath([5, 2, 4, 6]))
console.log(smartRobbersPath([2, 7, 9, 3, 1, 6]))
console.log(smartRobbersPath([4, 11, 10, 2, 1, 8, 5]))