// 1071. Greatest Common Divisor of Strings
function gcdOfStrings(str1, str2) {
    let l1 = str1.length;
    let l2 = str2.length;
    let str = '';
    for (let i = 0; i < Math.min(l1, l2); i++) {
        if (str1[i] === str2[i]) {
            str = str + str1[i];
        }
    }
    while (str.length > 0) {
        if (l1 % str.length !== 0 || l2 % str.length !== 0) {
            str = str.slice(0, -1);
        }
        else {
            break;
        }
    }
    let i = 0;
    let j = 0;
    while (j < Math.max(str1.length, str2.length)) {
        console.log(j);
        if (i === str.length)
            i = 0;
        if (str1[j] && str1[j] !== str[i] || str2[j] && str2[j] !== str[i]) {
            return '';
        }
        j++;
        i++;
    }
    return str;
}
;
let str1 = "AAAAAAAAA";
let str2 = "AAACCC";
console.log(gcdOfStrings(str1, str2));
