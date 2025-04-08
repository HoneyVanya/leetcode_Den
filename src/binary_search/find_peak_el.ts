// 162. Find Peak Element

function findPeakElement(nums: number[]): number {
    let left = 0, right = nums.length - 1
    if (nums.length === 1) return 0
    
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (mid === 0 && nums[mid] > nums[mid + 1]) return mid
        if (mid === nums.length - 1 && nums[mid] > nums[mid - 1]) return mid 
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid 
        if (nums[mid] < nums[mid + 1]) left = mid + 1
        else right = mid - 1
    }
};