// Language used = Javascript.
// Time Complexity = O(n).
// Right now only Working for the non-negative numbers/positive numbers.

const div2Int = function (divdnt, divsor) {
  let quo = 0;
  for (let i = 0; i <= divdnt; i++) {
    quo = quo + divsor;
    if (divdnt - quo < divsor) {
      return i + 1;
    } else {
      continue;
    }
  }
};

const divdnt = 10;
const divsor = 3;
const res = div2Int(divdnt, divsor);
console.log(res);
