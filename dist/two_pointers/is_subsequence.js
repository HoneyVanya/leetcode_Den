// 392. Is subsequence
function isSubsequence(s, t) {
    let j = 0;
    let k = s.length;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[j]) {
            j++;
            k--;
        }
    }
    if (k !== 0) {
        return false;
    }
    else
        return true;
}
;
