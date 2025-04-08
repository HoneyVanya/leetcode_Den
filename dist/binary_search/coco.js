// 875. Koko Eating Bananas
function minEatingSpeed(piles, h) {
    let pl = piles.length;
    piles = piles.sort((a, b) => a - b);
    if (h === pl)
        return piles[pl - 1];
    function canEat(k) {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / k);
        }
        return hours <= h;
    }
    let left = 1, right = piles[pl - 1], res = right;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (canEat(mid)) {
            res = mid;
            right = mid - 1;
        }
        else
            left = mid + 1;
    }
    return res;
}
;
