// 841. Keys and Rooms

function canVisitAllRooms(rooms: number[][]): boolean {
    let visited = new Set()
    let stuck = [...rooms[0]]
    visited.add(0)

    while (stuck.length) {
        let current = stuck.pop()
        if (visited.has(current)) continue
        visited.add(current)
        stuck.push(...rooms[current])
    }
    if (visited.size === rooms.length) return true 
    return false
};