// 🧩 Problem 2: Treasure Map Paths
// You have a map of one-way paths between landmarks on an island: paths[i] = [fromLandmark, toLandmark]. 
// You always start at "CAMP", and you must find a path that uses as many paths as possible without revisiting any path.
// If there are multiple paths of the same length, return the one that is lexicographically smallest.

function treasury (paths: string[][]): string[] {
    let map = new Map()

    for (let [from, to] of paths) {
        if (!map.has(from)) map.set(from, [])
        map.get(from).push(to)
    }

    for (let destinations of map.values()) {
        destinations.sort()
    }
    console.log(map)
    let path = []
    let arr = []
    function dfs(destination: string) {
        arr.push(destination)
        if (path.length < arr.length || (path.length === arr.length && path.join() > arr.join())) path = [...arr]
        
        let current = map.get(destination) || []
        for (let i = 0; i < current.length; i++) {
            let next = current.shift()
            dfs(next)
            current.unshift(next)
        }
        arr.pop()

    }
    dfs("CAMP")
    return path
}

const paths = [
    ["CAMP", "FOREST"],
    ["CAMP", "HILL"],
    ["FOREST", "CAVE"],
    ["CAVE", "RIVER"],
    ["HILL", "RIVER"],
    ["RIVER", "CAMP"]
  ];

  console.log(treasury(paths))