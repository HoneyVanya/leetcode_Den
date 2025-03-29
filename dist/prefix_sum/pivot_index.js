// 724. Find pivot index
function pivotIndex(nums) {
    let arr1 = new Array(nums.length).fill(0);
    let arr2 = new Array(nums.length).fill(0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i] + sum;
        arr1[i] = sum;
    }
    sum = 0;
    for (let j = nums.length - 1; j > -1; j--) {
        sum = nums[j] + sum;
        arr2[j] = sum;
    }
    for (let k = 0; k < nums.length; k++) {
        if (arr1[k - 1] === arr2[k + 1]) {
            return k;
        }
        if (k === 0 && arr2[k + 1] === 0)
            return 0;
        if (k === nums.length - 1 && arr1[k - 1] === 0)
            return nums.length - 1;
    }
    return -1;
}
;
