// var join = function (arr1, arr2) {
//   if (!arr1) return arr2;
//   if (!arr2) return arr1;

//   const cash = {};

//   arr1.forEach(item => {
//     if (item?.id !== undefined) {
//       cash[item.id] = { ...cash[item.id], ...item };
//     }
//   });

//   arr2.forEach(item => {
//     if (item?.id !== undefined) {
//       cash[item.id] = { ...cash[item.id], ...item };
//     }
//   });

//   const results = Object.values(cash).sort((a, b) => a.id - b.id);

//   return results;
// }

var join = function (arr1, arr2) {
  if (!arr1) return arr2
  if (!arr2) return arr1

  const cash = {}
  const results = []
  let index = 0
  while (index < arr1.length) {
    if (arr1[index]?.id !== undefined) {
      if (cash[arr1[index]?.id])
        cash[arr1[index]?.id] = { ...cash[arr1[index]?.id], ...arr1[index] }
      else
        cash[arr1[index]?.id] = arr1[index]
    }
    index++
  }
  index = 0
  while (index < arr2.length) {
    if (arr2[index]?.id  !== undefined) {
      if (cash[arr2[index]?.id])
        cash[arr2[index]?.id] = { ...cash[arr2[index]?.id], ...arr2[index] }
      else
        cash[arr2[index]?.id] = arr2[index]
    }
    index++
  }
  for (const key in cash) {
    results.push(cash[key])
  }
  return results
}

const arr1 = [{ id: 1, x: 1 }, { id: 2, x: 9 }]
const arr2 = [{ id: 1, y: 5 }, { id: 3, x: 9 }]


const arr3 = [{ id: 0, b: 16, y: 92, e: 90, x: 96, k: 11, z: 92, u: 28, t: 68, n: 45 }, { id: 2, n: 36, v: 42, i: 60, w: 37, p: 78 }]
const arr4 = [{ id: 0, r: 74, x: 12, n: 87, f: 87, j: 53, p: 16, b: 85, m: 73 }, { id: 1, b: 27, c: 21, d: 6, r: 93, z: 34 }]

console.log(join(arr1, arr2))
console.log(join(arr3, arr4))
