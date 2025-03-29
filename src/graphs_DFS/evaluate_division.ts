// 399. Evaluate Division

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    
    function graphMaker (variables, results) {
        let map = {}
        for (let i = 0; i < variables.length; i++) {
            let [dividend, divisor] = variables[i]
            let quotient = results[i]

            let dividendInMap = map.hasOwnProperty(dividend)
            let divisorInMap = map.hasOwnProperty(divisor)

            if (!dividendInMap) map[dividend] = {}
            if (!divisorInMap) map[divisor] = {}

            map[dividend][divisor] = quotient
            map[divisor][dividend] = 1 / quotient
        }
        return map
   }
    function calcQuotient (graph, dividend, divisor, visited) {
        if (visited.has(dividend)) return -1
        if (dividend === divisor) return 1

        visited.add(dividend)

        let neighbors = Object.keys(graph[dividend])

        for (let neighbor of neighbors) {
            let divisorOverNeighbor = graph[dividend][neighbor]
            let neighborOverDivisor = calcQuotient(graph, neighbor, divisor, visited)
            console.log(neighborOverDivisor)
            if (neighborOverDivisor === -1) continue 

            let dividendOverDivisor = divisorOverNeighbor * neighborOverDivisor

            return dividendOverDivisor
        }
        return -1
    }

    let map = graphMaker(equations, values)
    let queryResults = []

    for (let query of queries) {
        let [dividend, divisor] = query

        let dividendInGraph = map.hasOwnProperty(dividend)
        let divisorInGraph = map.hasOwnProperty(divisor)

        if (!dividendInGraph || !divisorInGraph) {
            queryResults.push(-1)
            continue
        }

        const visited = new Set()

        const quotient = calcQuotient(map, dividend, divisor, visited)

        queryResults.push(quotient)
    }
   return queryResults

};