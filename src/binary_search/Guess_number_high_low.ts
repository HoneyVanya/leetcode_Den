// 374. Guess Number Higher or Lower

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


 function guessNumber(n: number): number {
    let left = 1, right = n
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        let res = guess(mid)
        if (res === 0) return mid
        if (res === - 1) right = mid - 1
        if (res === 1) left = mid + 1
    }
    return -1
};

function guess(n) {
    if (n === 6) return 0
    if (n < 6) return 1
    if (n > 6) return -1
}