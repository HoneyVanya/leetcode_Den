// 2390. Removing stars from a string

function removeStars(s: string): string {
    let stuck = []

    let i = 0

    while (i < s.length) {
        if (s[i] !== '*') {
            stuck.push(s[i])
            i++
        } else {
            i++
            stuck.pop()
        }
    }
    return stuck.join('')
 };