// 394. Decode string 
// // function decodeString(s: string): string {
// //     let stuck = ''
// //     let k = ''
// //     let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
// //     while (i < s.length) {
// //         if (nums.includes(s[i])) {
// //             k = k + s[i]
// //             i++
// //         } else if (s[i] === '[') {
// //             stuck = stuck + kEls(stuck)
// //         } else if (s[i] === ']') {
// //             let o = parseInt(k)
// //             while (o > 0) {
// //                 stuck = stuck + stuck
// //                 o--
// //             }
// //             i++
// //             return stuck
// //         } else {
// //             stuck = stuck + s[i]
// //             i++
// //         }
// //     }
// // };
// function kEls (str: string, i: number): [string, number] {
//     let stuck = ''
//     while (i < str.length) {
//         if (str[i] === '[') {
//             kEls(str, i+1)
//         }
//         if (str[i] === ']') {
//             return [stuck, i]
//         }
//         stuck += str[i]
//         i++
//     }
// }
// function decodeString(s: string): string { 
//     let k = ''
//     let stuck = ''
//     let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
//     let i = 0
//     while(i < s.length) {
//         if (nums.includes(s[i])) {
//             k = k + s[i]
//             i++
//         } else if (s[i] === '[') {
//             let o = parseInt(k)
//             let stuck1: string
//             [stuck1, i] = kEls(s, i+1)
//             console.log(i)
//             while (o > 0) {
//                 stuck += stuck1
//                 o--
//             }
//             k = ''
//             i++
//         } else {
//             stuck = stuck + s[i]
//             i++
//         }
//     }
//     return stuck
// }
// let s = "ad3[2[3[ah]2[bc]]]"
function decodeString(s) {
    let stuck = [];
    let currentNum = 0;
    let currentStr = '';
    for (let char of s) {
        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + parseInt(char, 10);
        }
        else if (char === '[') {
            stuck.push(currentStr);
            stuck.push(currentNum);
            currentStr = '';
            currentNum = 0;
        }
        else if (char === ']') {
            let num = stuck.pop();
            let prevStr = stuck.pop();
            currentStr = prevStr + currentStr.repeat(num);
        }
        else {
            currentStr += char;
        }
    }
    return currentStr;
}
