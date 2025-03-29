// 1657. Determine if two strings are close
function closeStrings(word1, word2) {
    let map1 = new Map();
    let map2 = new Map();
    if (word1.length !== word2.length)
        return false;
    for (let i = 0; i < word1.length; i++) {
        map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
        map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
    }
    for (let j = 0; j < word1.length; j++) {
        if (!map1.get(word2[j]))
            return false;
        if (!map2.get(word1[j]))
            return false;
    }
    let arr1 = Array.from(map1.values());
    arr1.sort((a, b) => a - b);
    let arr2 = Array.from(map2.values());
    arr2.sort((a, b) => a - b);
    for (let k in arr1) {
        if (arr1[k] !== arr2[k])
            return false;
    }
    // let set1 = new Set([...Array.from(map1.values()), ...Array.from(map2.values())])
    // let set2 = new Set(Array.from(map1.values()))
    // if (set1.size !== set2.size) return false
    return true;
}
;
// string must be equal !
// unique letters must be the same !
// the numbers of occurrences must be the same i.e. (1,2,3) (3,1,2) etc ?
let word1 = "aaabbbbccddeeeeefffff", word2 = "aaaaabbcccdddeeeeffff";
console.log(closeStrings(word1, word2));
// a => 3     a => 5
// b => 4     b => 2
// c => 2     c => 3
// d => 2     d => 3
// e => 5     e => 4
// f => 5     f => 4
// 2 3 4 5 
// 2 3 4 5
