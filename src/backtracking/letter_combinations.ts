// 17. Letter Combinations of a Phone Number

let phoneKey = new Map<string, string[]> ([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']], 
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
])

function letterCombinations(digits: string): string[] {
    let letters = []
    let res = []

    function dfs (digit) {
        if (digit >= digits.length) {
            res.push(letters.join(''))
            return
        }
        let current = phoneKey.get(digits[digit])
        for (let letter of current) {
            letters.push(letter)
            dfs(digit + 1)
            letters.pop()
        }
    }
    if (digits) dfs(0)
    return res 
};

let digits = '23'

console.log(letterCombinations(digits))