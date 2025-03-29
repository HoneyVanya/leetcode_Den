// 11. Conteiner with most water
function maxArea(height) {
    let j = height.length - 1;
    let i = 0;
    let max = 0;
    while (i < j) {
        let maxv = (j - i) * Math.min(height[i], height[j]);
        if (maxv > max) {
            max = maxv;
        }
        console.log(i, j);
        if (height[i] <= height[j]) {
            i++;
        }
        else
            j--;
    }
    return max;
}
;
let height = [1, 1];
console.log(maxArea(height));
