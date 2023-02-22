// 1. select first element as minimum value
// 2. replace minimum value if find other smaller element while iterating
// 3. push minimum value to new array after iterating finished

const unsortedArrays = require('./utils/constants')

const selectionSort = (arr) => {
    let unsorted = [...arr]
    const sorted = []
    let minimum = unsorted[0]
    while(unsorted.length !== 0){
      for(i=0; i<=unsorted.length-1; i++){
        if(minimum > unsorted[i]){
          minimum = unsorted[i]
        }
        if((unsorted.length - 1) === i){
          sorted.push(minimum)
          unsorted = unsorted.filter(elem=>elem !== minimum)
          minimum = unsorted[0]
        } 
      }
    }
    return sorted
}

console.log(selectionSort(unsortedArrays.unsortedArr))