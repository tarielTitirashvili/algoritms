var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArr = []
  let pointer1 = 0
  let pointer2 = 0
  while (pointer1 < nums1.length || pointer2 < nums2.length) {
    if (nums1[pointer1] !== undefined && nums2[pointer2] !== undefined) {
      if (nums1[pointer1] <= nums2[pointer2]) {
        mergedArr.push(nums1[pointer1])
        pointer1++
      } else {
        mergedArr.push(nums2[pointer2])
        pointer2++
      }
    } else {
      if (nums1[pointer1] !== undefined) {
        mergedArr.push(nums1[pointer1])
        pointer1++
      }
      if (nums2[pointer2] !== undefined) {
        mergedArr.push(nums2[pointer2])
        pointer2++
      }
    }
  }

  let halfLength = mergedArr.length / 2
  if (mergedArr.length % 2 === 1)
    return (mergedArr[Math.floor(halfLength)]);
  else
    return (mergedArr[halfLength-1] + mergedArr[halfLength]) / 2;
};

console.log(findMedianSortedArrays([1, 2], [3, 4]))