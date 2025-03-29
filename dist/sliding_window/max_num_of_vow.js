// 1456. Maximum number of vowels in a substring of given length
function maxVowels(s, k) {
    let vow = ['a', 'e', 'i', 'o', 'u'];
    let n = 0;
    let v = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (k === 1) {
            if (vow.includes(s[i]))
                return 1;
        }
        console.log(s[i] + ' s[i]');
        if (n === k) {
            if (vow.includes(s[i - n]))
                v--;
        }
        else
            n++;
        if (vow.includes(s[i])) {
            v++;
        }
        if (max < v)
            max = v;
        console.log(n, +v + ' n v');
    }
    return max;
}
;
// let s = "tnfazcwrryitgacaabwm", k = 4
// console.log(maxVowels(s, k))
