// 🧩 Problem 2: Treasure Map Paths
// You have a map of one-way paths between landmarks on an island: paths[i] = [fromLandmark, toLandmark]. 
// You always start at "CAMP", and you must find a path that uses as many paths as possible without revisiting any path.
// If there are multiple paths of the same length, return the one that is lexicographically smallest.
function treasury(paths) {
    let map = new Map();
    for (let [from, to] of paths) {
        if (!map.has(from))
            map.set(from, []);
        map.get(from).push(to);
    }
    for (let destinations of map.values()) {
        destinations.sort();
    }
    let arr = [];
    function dfs(destination) {
        let current = map.get(destination);
        while (current.length) {
            let next = current.shift();
            dfs(next);
        }
        arr.unshift(destination);
    }
    return arr;
}
const paths = [
    ["CAMP", "BAY"],
    ["CAMP", "CLIFF"],
    ["BAY", "DUNE"],
    ["CLIFF", "DUNE"],
    ["DUNE", "PEAK"],
    ["BAY", "PEAK"]
];
console.log(treasury(paths));
