"use strict";
// 334. Increasing triplet subsequence
function increasingTriplet(nums) {
    let i = 0, j = 1, k = 2;
    while (k < nums.length) {
        if (nums[i] < nums[j] && nums[j] < nums[k])
            return true;
        if (nums[j] < nums[i] && j !== nums.length - 1) {
            j++;
            k++;
        }
        else if (j === nums.length - 2) {
            i++;
            j = i + 1;
        }
        else if (nums[j] > nums[i] && nums[k] < nums[j]) {
            k++;
        }
    }
    return false;
}
;
let nums = [1, 2, 3, 4, 5];
console.log(increasingTriplet(nums));
