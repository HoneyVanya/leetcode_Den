// 238. Product of array except self 
function productExceptSelf(nums) {
    let pref = prefixProduct(nums);
    let suff = suffixProduct(nums);
    let t = nums.map((num, index) => {
        if (index === 0) {
            return num = suff[1];
        }
        else if (index === nums.length - 1) {
            return num = pref[index - 1];
        }
        else {
            return num = pref[index - 1] * suff[index + 1];
        }
    });
    return t;
}
;
function prefixProduct(arr) {
    let n = arr.length;
    let prefixPro = new Array(n).fill(0);
    prefixPro[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefixPro[i] = prefixPro[i - 1] * arr[i];
    }
    return prefixPro;
}
function suffixProduct(arr) {
    let n = arr.length;
    let suffixPro = new Array(n).fill(0);
    suffixPro[n - 1] = arr[n - 1];
    for (let j = n - 2; j >= 0; j--) {
        suffixPro[j] = suffixPro[j + 1] * arr[j];
    }
    return suffixPro;
}
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
