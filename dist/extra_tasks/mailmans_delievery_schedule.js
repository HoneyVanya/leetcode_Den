// 🧩 Problem 3: Mailman’s Delivery Schedule
// Given schedule[i] = [sender, receiver], reconstruct the mailman’s delivery itinerary such that:
// You start from "POST".
// You must visit all nodes (not necessarily all edges).
// At each node, you can choose which path to take — choose the lexicographically largest valid next destination.
// This one is more like a node visit task instead of edge visit.
function mailsmanSchedule(schedule) {
    let map = new Map();
    for (let [from, to] of schedule) {
        if (!map.has(from))
            map.set(from, []);
        map.get(from).push(to);
    }
    for (let destinations of map.values()) {
        destinations.sort().reverse();
    }
    let mailmansPath = [];
    let visited = new Set();
    function dfs(str) {
        mailmansPath.push(str);
        visited.add(str);
        let current = map.get(str) || [];
        for (let i = 0; i < current.length; i++) {
            let next = current[i];
            if (!visited.has(next)) {
                dfs(next);
                return;
            }
        }
    }
    dfs('POST');
    return mailmansPath;
}
const schedule = [
    ["POST", "A"],
    ["POST", "B"],
    ["A", "C"],
    ["B", "C"],
    ["C", "D"],
    ["D", "E"]
];
console.log(mailsmanSchedule(schedule));
