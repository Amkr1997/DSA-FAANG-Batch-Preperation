// Language used here = Javascript.
// Time Complexity = O(n).
// Space Complexity = O(n).

const myPow = function (x, n) {
  //n = Math.abs(n);
  if (n < 0) {
    //n = -1 * n;
    let ans = Pow(x, n * -1);
    return 1 / ans;
  }
  return Pow(x, n);
};

const Pow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  let y = Pow(x, n - 1);
  x = x * y;
  return x;
};

const display = myPow(2.0, -2);
const display2 = myPow(2.0, 10);
const display3 = myPow(2.1, 3);
console.log(display);
console.log(display2);
console.log(display3);
