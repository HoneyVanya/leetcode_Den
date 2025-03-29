// 1004. Max consecutive ones III 
function longestOnes(nums, k) {
    let n = 0;
    let s = k;
    let max = 0;
    let i = 0;
    while (i < nums.length) {
        console.log(s + ' s');
        console.log(i + ' i');
        console.log(nums[i] + ' nums[i]');
        if (s === 0 && nums[i] === 0) {
            console.log(n + ' initial n');
            for (let j = i - n; j < i; j++) {
                if (nums[j] === 0) {
                    console.log(j + ' j');
                    i = j + 1;
                    console.log(i + ' i after j');
                    break;
                }
            }
            s = k;
            n = 0;
        }
        if (nums[i] === 1)
            n++;
        if (nums[i] === 0 && s !== 0) {
            s--;
            n++;
        }
        console.log(n + ' n');
        if (max < n)
            max = n;
        i++;
    }
    return max;
}
;
// let nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// console.log(longestOnes(nums, k))
