// 1. select pivot element
// 2. everything more then pivot goes right from the pivot and everything less then pivot goes left
// 3. then we should select nev pivot element and repeat.
const unsortedArrays = require('./utils/constants')



function quickSort(array) {
  if(array.length <= 1)
    return array

  let pivot = array[array.length-1]
  const less = []
  const more = []
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      more.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(more)]
}

console.log(quickSort(unsortedArrays.unsortedArr))
console.log(quickSort(unsortedArrays.unsortedArr2))