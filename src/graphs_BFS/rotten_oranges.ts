// 994. Rotting Oranges

type Coordinates = {
    x: number, 
    y: number
}

function orangesRotting(grid: number[][]): number {
    let r: number = grid.length, c: number = grid[0].length
    let queue: Coordinates[] = []
    let fresh = 0

    const directions: Coordinates[] = [
        {x: -1, y: 0}, {x: 0, y: -1}, {x: 1, y:0}, {x: 0, y: 1}
    ]

    for (let row = 0; row < r; row++) {
        for (let column = 0; column < c; column++) {
            if (grid[row][column] === 1) fresh++
            if (grid[row][column] === 2) queue.push({x: row, y: column})
        }
    }

    if (fresh === 0) return 0

    let count = 0

    while (queue.length) {
        let size = queue.length
        let changed = false 


        for (let i = 0; i < size; i ++) {
            let {x, y} = queue.shift()

            for (let {x: dx, y: dy} of directions) {
                let newR = x + dx, newC = y + dy
                if (newR >= 0 && newR < r && newC >= 0 && newC < c && grid[newR][newC] === 1)  {
                    queue.push({x: newR, y: newC})
                    grid[newR][newC] = 2
                    fresh--
                    changed = true 
                }

            }
        }
        if (changed) count++
    }
    if (fresh === 0) return count
    return -1
};

let grid = [[2,1,1],[1,1,1],[1,1,1]]

console.log(orangesRotting(grid))