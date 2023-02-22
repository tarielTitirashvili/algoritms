// best search algorithm during every iteration it will exclude half of the array elements
// 1.it will check element in the middle 
// 2.if it will lass then target all elements on right of the middle will be excluded and repeat this logic

const unsortedArrays = require('./utils/constants')

function binarySearch(sortedArray, target) {
  let first = 0
  let last = sortedArray.length - 1
  
  while (first <= last) {
    const mid = Math.floor((first + last) / 2)
    if(sortedArray[mid] === target){
      return mid
    }else if(sortedArray[mid] < target){
      first = mid + 1
    }else if(sortedArray[mid] > target){
      last = mid - 1
    }
  }
  return -1
}


console.log(binarySearch(unsortedArrays.unsortedArr, 8))