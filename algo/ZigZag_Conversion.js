/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // init array
  var arr = [];
  for (var i = 0; i < numRows; i++) {
    arr.push([]);
  }
  var mod = numRows + numRows - 2;
  if (mod === 0) {
    mod = 1;
  }
  for (var i = 0; i < s.length; i++) {
    let tempMod = i % mod;
    if (tempMod > numRows - 1) {
      tempMod = numRows - 1 - (tempMod - (numRows - 1));
    }
    arr[tempMod].push(s[i]);
  }
  var finalArr = [];
  for (var i = 0; i < arr.length; i++) {
    let temp = arr[i];
    for (var j = 0; j < temp.length; j++) {
      finalArr.push(temp[j]);
    }
  }
  return finalArr.join("");
};
