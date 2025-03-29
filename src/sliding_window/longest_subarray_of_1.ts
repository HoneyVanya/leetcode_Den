// 1493. Longest subarray of 1's after deleting 1 element 

function longestSubarray(nums: number[]): number {
    let leftPointer = 0
    let rightPointer = 0
    let max = 0
    let n = 0
    let k = 1

    while (rightPointer < nums.length) {
        if(nums[rightPointer] === 0 && k !== 0) {
            rightPointer++
            k--
        }
        if (nums[rightPointer] === 1) {
            rightPointer++
            n++
        }
        if (max < n) max = n
        if (nums[rightPointer] === 0 && k === 0) {
            if (nums[leftPointer] === 0) {
                leftPointer++
                k = 1
            } else {
                leftPointer++
                n--
            }
        }
    }
    if (k > 0) return max - 1
    return max
};