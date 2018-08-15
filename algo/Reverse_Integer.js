/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var num = Math.abs(Number(x));
  var arr = num
    .toString()
    .split("")
    .reverse();
  if (arr[0] === "0") {
    arr.shift();
  }
  var value = Number(arr.join(""));
  value = x > 0 ? value : -value;
  if (value > Math.pow(2, 31) - 1 || value < -Math.pow(2, 31)) {
    return 0;
  } else {
    return value;
  }
};
