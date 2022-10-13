// Majority Element.
// Language used here => Javascript,
// Time Complexity => O(nlogn).(Due to inbuilt sorting function used here.)

// Basically here in a sorted array,
// it's given that the majority element > n/2,
// Thus we can assume that the majority element would always be greator than the other elements,
// irrespective of the odd or even elements present in that array.

function majorityElement(nums) {
  nums.sort();
  return nums[nums.length - 1];
}

const nums = [2, 2, 1, 1, 1, 2, 2];
const res = majorityElement(nums);
console.log(res);
