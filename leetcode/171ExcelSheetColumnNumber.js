// 1 alphabet array
// 2 function which will calculate letters number
// 3 sum of all letter numbers


var titleToNumber = function(columnTitle) {
  const alphabetObj = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5,
    'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10,
    'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15,
    'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20,
    'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26
  }

  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result += calculateColumnValue(alphabetObj[columnTitle[i]], columnTitle.length - i - 1);
  }
  
  function calculateColumnValue(letterNum, exponent) {
    return letterNum * Math.pow(26, exponent);
  }
  return result
};

console.log(titleToNumber('ZY'))