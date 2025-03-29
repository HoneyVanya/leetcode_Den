// 547. Number of Provinces

function findCircleNum(isConnected: number[][]): number {
    let map = new Map()
    let set = new Set()
    let c = isConnected.length

    for (let i = 0; i < c; i++) {
        console.log(i)
        set.add(i)
        map.set(i, [])
        for (let j = 0; j < isConnected[i].length; j++) {
            if (isConnected[i][j] === 1) {
                map.get(i).push(j)
            }
        }
    }
    console.log(set)
    console.log(set.has(0))
    console.log(map)
    let count = 0
    function dfs (num, visited = new Set()) {
        visited.add(num)
        set.delete(num)

        let destinations = map.get(num)
        console.log(destinations)
        for (let destination of destinations) {
            if (!visited.has(destination)) dfs(destination, visited)
        }
    }
    for (let j = 0; j < c; j++) {
        if (!set.has(j)) continue
        console.log(j)
        count++
        dfs(j)
    }

    return count
};

console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]]))