// 1431. Kids with the greatest number of candies
function kidsWithCandies(candies, extraCandies) {
    let maxKid = Math.max(...candies);
    let bool = new Array(candies.length).fill(false);
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies > maxKid) {
            bool[i] = true;
        }
    }
    return bool;
}
;
let candies = [2, 3, 5, 1, 3], extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
