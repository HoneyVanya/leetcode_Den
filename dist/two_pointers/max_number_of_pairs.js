// 1679. Max number of k-sum pairs
function maxOperations(nums, k) {
    let i = 0;
    let j = nums.length - 1;
    let sums = 0;
    nums.sort((a, b) => (a - b));
    while (i < j) {
        if (nums[i] + nums[j] === k) {
            sums++;
            i++;
            j--;
        }
        if (nums[i] + nums[j] < k)
            i++;
        if (nums[i] + nums[j] > k)
            j--;
    }
    return sums;
}
;
// let gums = [1,2,3,4], k = 5
// console.log(maxOperations(gums, k))
