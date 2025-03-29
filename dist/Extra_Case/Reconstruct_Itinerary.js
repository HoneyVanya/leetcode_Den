function findItinerary(tickets) {
    let graph = new Map();
    for (let [from, to] of tickets) {
        let airInGraph = graph.has(from);
        if (!airInGraph)
            graph.set(from, []);
        graph.get(from).push(to);
    }
    for (let destinations of graph.values()) {
        destinations.sort();
    }
    let arr = [];
    function dfs(air) {
        let destinations = graph.get(air) || [];
        while (destinations.length > 0) {
            let next = destinations.shift();
            dfs(next);
        }
        arr.unshift(air);
    }
    dfs("JFK");
    return arr;
}
;
