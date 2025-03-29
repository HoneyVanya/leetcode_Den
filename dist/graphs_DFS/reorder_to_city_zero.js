// 1466. Reorder Routes to Make All Paths Lead to the City Zero
function minReorder(n, connections) {
    let map = new Map();
    for (let [from, to] of connections) {
        if (!map.has(from))
            map.set(from, []);
        if (!map.has(to))
            map.set(to, []);
        console.log(map);
        console.log(" initial");
        map.get(from).push([to, 1]);
        map.get(to).push([from, 0]);
        console.log(map);
        console.log(" ones and zeroes");
    }
    let visited = new Set();
    let changes = 0;
    function dfs(node) {
        visited.add(node);
        for (let [neighbor, needsReorder] of map.get(node)) {
            if (!visited.has(neighbor)) {
                changes += needsReorder;
                dfs(neighbor);
            }
        }
    }
    dfs(0);
    return changes;
}
;
console.log(minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]));
