// 334. Increasing triplet subsequence

function increasingTriplet(nums: number[]): boolean {
    let i = 0
    let j = Infinity
    let k = Infinity

    while (i < nums.length) {
        if (nums[i] <= j) {
            j = nums[i]
        } else if (nums[i] <= k) {
            k = nums[i]
        } else return true
        i++

    }
    return false 
};

// let nums = [1,5,0,4,1,3]

// console.log(increasingTriplet(nums))