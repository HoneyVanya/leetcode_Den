// 283. Move zeroes

function moveZeroes(nums: number[]): void {
    let i = 0
    let k = 0

    while (i < nums.length) {
        let l = nums.length
        if (nums[i] === 0) {
            k++
            nums.splice(i, 1)
            nums.push(0)
        } else i++
        if (i >= l - k) {
            break
        }
    }
};