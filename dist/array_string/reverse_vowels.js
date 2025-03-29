// 345. Reverse Vowels of a String
function reverseVowels(s) {
    let vows = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let s1 = s.split('');
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (vows.includes(s[i]) && vows.includes(s[j])) {
            s1[i] = s[j];
            s1[j] = s[i];
            i++;
            j--;
        }
        else if (vows.includes(s[i])) {
            j--;
        }
        else if (vows.includes(s[j])) {
            i++;
        }
        else {
            i++;
            j--;
        }
    }
    return s1.join('');
}
;
console.log(reverseVowels('leetcode'));
