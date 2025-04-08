// 2300. Successful Pairs of Spells and Potions
function successfulPairs(spells, potions, success) {
    let pairsDone = [];
    potions.sort((a, b) => a - b);
    for (let i of spells) {
        let minReq = Math.ceil(success / i);
        let left = 0, right = potions.length - 1;
        let idx = potions.length;
        while (left <= right) {
            let mid = Math.floor((right + left) / 2);
            if (potions[mid] >= minReq) {
                idx = mid;
                right = mid - 1;
            }
            else
                left = mid + 1;
        }
        pairsDone.push(potions.length - idx);
    }
    return pairsDone;
}
;
