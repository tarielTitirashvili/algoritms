  const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  function sort(array) {
    for (let k = 0; k < array.length - 1; k++) {
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          let num1 = array[i];
          let num2 = array[i + 1];
          array[i] = num2;
          array[i + 1] = num1;
        }
      }
    }
    return array;
  }
  console.log(sort(arr));
