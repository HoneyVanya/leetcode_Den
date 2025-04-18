// 🧩 Problem 4: Supply Chain Circuit
// In a closed supply chain, you're given transfer routes as transfers[i] = [startFactory, endFactory]. You must:
// Use all routes exactly once.
// Start and end at the same factory.
// Return any valid path that forms a circuit.
// If multiple are possible, return the one that uses the least number of factories alphabetically, 
// i.e., prefer paths like ["A", "B", "A"] over ["A", "C", "D", "A"].
function supplyChain(transfers) {
    let map = new Map();
    for (let [from, to] of transfers) {
        if (!map.has(from))
            map.set(from, []);
        map.get(from).push(to);
    }
    for (let destinations of map.values()) {
        destinations.sort();
    }
    let route = [];
    function dfs(str) {
        let current = map.get(str) || [];
        while (current.length) {
            let next = current.shift();
            dfs(next);
        }
        route.push(str);
    }
    dfs("A");
    return route.reverse();
}
[];
const transfers = [
    ["A", "B"],
    ["B", "C"],
    ["C", "A"],
    ["A", "D"],
    ["D", "A"]
];
console.log(supplyChain(transfers));
