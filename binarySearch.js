const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

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


console.log(binarySearch(arr, 8))