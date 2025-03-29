// 443. String compression (2 versions)

function compress(chars: string[]): number {

    let i = chars.length - 1
    let k = 0

    while (i > -1) {
        k++
        console.log(i, k, chars)
        let ks = k.toString().split('')
        if (chars[i] !== chars[i - 1] ) {
             if (k !== 1) { 
                chars.splice(i, k, chars[i])
                console.log(chars + " insert")
                chars.splice(i + 1, 0, ...ks)
                console.log(chars + " k insert")
            }
            k = 0
        }
        i--
    }
    console.log(chars)
    return chars.length
};

// Second Version

function compress1(chars: string[]): number {
    let map = new Map()
    let i = chars.length - 1

    while(i > - 1) {
        if (!map.has(chars[i])) map.set(chars[i], 0)
        map.set(chars[i], map.get(chars[i]) + 1)
        if (i === 0) { 
            if (map.get(chars[i]) === 1) {
                chars.splice(i, map.get(chars[i]), chars[i])
            } else { 
                chars.splice(i, map.get(chars[i]), chars[i])
                chars.splice(i + 1, 0, ...map.get(chars[i]).toString().split(''))
            }
        }
        if (chars[i] !== chars[i - 1] && i !== 0) {
            if (map.get(chars[i]) === 1) {
                chars.splice(i, map.get(chars[i]), chars[i])
                map.set(chars[i], 0)
            } else { 
                chars.splice(i, map.get(chars[i]), chars[i])
                chars.splice(i + 1, 0, ...map.get(chars[i]).toString().split(''))
                map.set(chars[i], 0)
            }
        }
        i--
    }
    return chars.length
};

let chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]

console.log(compress(chars))