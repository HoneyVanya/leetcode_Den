// 1207. Unique number of occurrences
function uniqueOccurrences(arr) {
    let map = new Map();
    let set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        if (!map.get(arr[i]))
            map.set(arr[i], 0);
        map.set(arr[i], map.get(arr[i]) + 1);
    }
    let arr3 = [];
    for (let j of set) {
        arr3.push(map.get(j));
    }
    let newSet = new Set(arr3);
    let arr2 = [...newSet];
    if (arr2.length !== arr3.length)
        return false;
    return true;
}
;
// let arr = [-3,0,1,-3,1,1,1,-3,10,0]
// console.log(uniqueOccurrences(arr))
// correct correspondace with set 
// function uniqueOccurrences(arr: number[]): boolean {
//     let countMap = new Map<number, number>();
//     for (let num of arr) {
//         countMap.set(num, (countMap.get(num) || 0) + 1);
//     }
//     let occurrences = new Set(countMap.values());
//     return occurrences.size === countMap.size;
// }
