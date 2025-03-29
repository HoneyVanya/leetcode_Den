// 1207. Unique number of occurrences
function uniqueOccurrences(arr) {
    let map = new Map();
    let set = new Set(arr);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map.get(arr[i]))
            map.set(arr[i], 0);
        map.set(arr[i], map.get(arr[i]) + 1);
    }
    let o = 0;
    for (let m of map) {
        if (map.get(m) === o)
            return false;
        o = map.get(m);
    }
    return false;
}
;
let arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr));
