//47. permutation leetcode task


var permute = function (nums) {
  const results = []
  const finder = (arr, res = []) => {
    
    if (arr.length <= 1) {
      return results.push([...res, arr[0]])
    } else {
      for (var i = 0; i < arr.length; i++) {
        const newArr = arr.filter(k => k !== arr[i])
        finder(newArr, [...res, arr[i]])
      }
    }
  }
  if (nums.length < 1)
    return []
  else{
    finder(nums)
    return results
  }
};

console.log(permute([1, 2, 3]))