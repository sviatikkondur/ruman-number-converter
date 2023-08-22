function convertToRoman(num) {
  const romanNumerals = {
    1: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    2: ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    3: ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    4: ["", "M", "MM", "MMM", "MMMM"],
  };
 
  const numArr = String(num).split('').map(Number);
  let counter = numArr.length;
  let resultStr = '';
  let i = 0;
 
  while(counter > 0) {
    resultStr += romanNumerals[counter][numArr[i]];
    counter--;
    i++;
  }
 
  return resultStr;
 }
 
 console.log(convertToRoman(36));