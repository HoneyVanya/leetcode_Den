// 1768. Merge Strings Alternately

// let word1 = "ab", word2 = "pqrs"

function mergeAlternately(word1: string, word2: string): string {
    let n = ''
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (word1[i]) n = n + word1[i]
        if (word2[i]) n = n + word2[i]
    }
    return n
};

// console.log(mergeAlternately(word1, word2))