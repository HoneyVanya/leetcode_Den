// 151. Reverse words in string

function reverseWords(s: string): string {
    s = s.split(/\s+/).join(' ').trim()
    let y = s.split(' ')
    console.log(y)

    let i = 0
    let j = s.length - 1
    while (i < j) {
        let current = y[i]
        y[i] = y[j]
        y[j] = current
        i++
        j--
    }
    return y.join(' ').trim()

};

console.log(reverseWords("a good   example"))