// 216. Combination Sum III
function combinationSum3(k, n) {
    if (k === 0)
        return [];
    if (n === 0)
        return [];
    let res = [];
    let subset = [];
    function dfs(num = 1, sum = 0) {
        if (sum === n && subset.length === k) {
            return res.push([...subset]);
        }
        if (n < sum)
            return;
        for (let i = num; i <= 9; i++) {
            subset.push(i);
            dfs(i + 1, sum + i);
            subset.pop();
        }
    }
    dfs();
    return res;
}
;
