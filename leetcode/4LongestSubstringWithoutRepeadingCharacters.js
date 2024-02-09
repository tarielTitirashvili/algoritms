
var lengthOfLongestSubstring = function (s) {
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let characters = []
    for (let k = i; k < s.length; k++) {
      if (!characters.includes(s[k])) {
        characters.push(s[k])
        if (k === s.length - 1 && max <= characters.length) {
          max = characters.length
          characters = []
        }
      } else{
        if (max <= characters.length) {
          max = characters.length
          characters = []
        }
        break
      }
    }
  }
  return max
};

console.log(lengthOfLongestSubstring('qrsvbspk'))