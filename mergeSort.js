const arrays = require('./utils/constants')


function mergeSortedArrays(left, right) {
  const array = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftIndex<left.length || rightIndex < right.length) {
    if(left.length===0 && right.length!==0) {
      return right
    }else if(right[rightIndex]===undefined && leftIndex<left.length){
      array.push(left[leftIndex])
      leftIndex++
    }else if(left[leftIndex]<right[rightIndex]){
      array.push(left[leftIndex])
      leftIndex++
    }else if(left[leftIndex]>right[rightIndex]){
      array.push(right[rightIndex])
      rightIndex++
    }else{
      array.push(right[rightIndex])
      rightIndex++
    }
  }
  return array
}

function mergeSort(array) {
  
  if(array.length <=1){
    return array
  }
  const mid = Math.floor(array.length / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid)
  
  return mergeSortedArrays(mergeSort(left), mergeSort(right))
}


console.log(arrays.unsortedArr)
console.log(mergeSort(arrays.unsortedArr))
console.log(arrays.unsortedArr2)
console.log(mergeSort(arrays.unsortedArr2))
console.log(arrays.unsortedArr3)
console.log(mergeSort(arrays.unsortedArr3))
console.log(mergeSort(arrays.unsortedArr4))
