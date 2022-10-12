/// Kth Smallest Number.
// Language used here - Javascript
// Time Complexity -:
// for average case Thetta(n)
// for worst case O(n^2)

function getPivotPoint(arr, p, q) {
  let pivotElement = arr[q];
  let pivotPoint = p;

  for (let i = p; i <= q; i++) {
    if (arr[i] < pivotElement) {
      [arr[i], arr[pivotPoint]] = [arr[pivotPoint], arr[i]];
      pivotPoint++;
    }
  }
  [arr[pivotPoint], arr[q]] = [arr[q], arr[pivotPoint]];
  return pivotPoint;
}

function quickSort(arr, k, p, q) {
  let pivotPoint = getPivotPoint(arr, p, q);
  if (pivotPoint === k - 1) {
    return arr[pivotPoint];
  } else if (pivotPoint < k - 1) {
    return quickSort(arr, k, pivotPoint + 1, q);
  } else {
    return quickSort(arr, k, p, pivotPoint - 1);
  }
}

const arr = [40, 25, 68, 79, 52, 66, 89, 97];
const p = 0;
const q = arr.length - 1;
const k = 2;

const result = quickSort(arr, k, p, q);
console.log(result);
