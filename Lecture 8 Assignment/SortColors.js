// Sort Colors Question.
// Language used => Javascript.
// Time Complexity here => O(n).(Because ony one loop is used here, Thus we will iterate once only)

const sortColors = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  for (let i = 0; i <= r; i++) {
    if (nums[i] == 0) {
      let tmp = nums[l];
      nums[l] = nums[i];
      nums[i] = tmp;
      l++;
    } else if (nums[i] == 2) {
      let tmp = nums[r];
      nums[r] = nums[i];
      nums[i] = tmp;
      r--;
      i--;
    }
  }
  return nums;
};

const nums = [2, 0, 2, 1, 1, 0];
const res = sortColors(nums);
console.log(res);
