
// 605. Can place flowers

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let len = flowerbed.length 
    let k = 0
    if (n === 0) return true

    for (let i = 0; i < len; i++) {
        if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0 || i === len - 1 && flowerbed[len - 1] === 0 && flowerbed[len - 2] === 0) {
            flowerbed[i] = 1
            k++
        } else if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i+1] === 0) {
            flowerbed[i] = 1
            k++
        }
        console.log(k)
        if (n === k) return true 
    }
    return false
};

let flowerbed = [0,1,0,1,0,1,0,0], n = 0

console.log(canPlaceFlowers(flowerbed, n))