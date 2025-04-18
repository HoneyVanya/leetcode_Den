// 🧩 Problem 1: Package Delivery Route
// You're given a list of package delivery routes where routes[i] = [fromHub, toHub] represents a delivery leg between logistics hubs. 
// Your job is to reconstruct the delivery path starting from the "MAIN" hub.
// Each delivery leg must be used exactly once, and if there are multiple valid routes, 
// return the one with the largest lexical order (e.g., "MAIN" → "ZNY" beats "MAIN" → "LAX").
function deliveryRoute(routes) {
    let map = new Map();
    for (let [from, to] of routes) {
        if (!map.has(from))
            map.set(from, []);
        map.get(from).push(to);
    }
    for (let destinations of map.values()) {
        destinations.sort().reverse();
    }
    let newRoutes = [];
    function dfs(hub) {
        let current = map.get(hub) || [];
        while (current.length) {
            let next = current.shift();
            dfs(next);
        }
        newRoutes.unshift(hub);
    }
    dfs('MAIN');
    return newRoutes;
}
const routes = [
    ["MAIN", "ATL"],
    ["MAIN", "ZNY"],
    ["ATL", "LAX"],
    ["LAX", "MAIN"],
    ["ZNY", "ATL"]
];
//   ["MAIN", "ZNY"] ["ZNY", "ATL"] ["ATL", "LAX"] ["LAX", "MAIN"] ["MAIN", "ATL"]
console.log(deliveryRoute(routes));
