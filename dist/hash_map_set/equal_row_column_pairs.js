// 2352. Equal row and column pairs
function equalPairs(grid) {
    let mapC = new Map();
    for (let y in grid) {
        mapC.set(y, []);
    }
    for (let row of grid) {
        for (let i in row) {
            mapC.get(i).push(row[i]);
        }
    }
    let arr = [...mapC.values()];
    let pairs = 0;
    for (let i of grid) {
        for (let k of arr) {
            if (i.toString() === k.toString())
                pairs++;
        }
    }
    return pairs;
}
;
console.log(equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]));
// hash the arrays and compare values 
