// 1926. Nearest Exit from Entrance in Maze

function nearestExit(maze: string[][], entrance: number[]): number {
    let rows = maze.length, cols = maze[0].length
    let directions = [[-1,0], [0,1], [1,0], [0,-1]]
    let queue = [[entrance[0], entrance[1], 0]]

    maze[entrance[0]][entrance[1]] = "+"

    while (queue.length) {
        let [r, c, steps] = queue.shift()
        for (let [dr, dc] of directions) {
            let nr = dr + r, nc = dc + c
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && maze[nr][nc] === '.') {
                if (nr === 0 || nr === rows - 1 || nc === 0 || nc === cols - 1) {
                    return steps + 1
                }
                maze[nr][nc] = '+'
                queue.push([nr, nc, steps + 1])
            }
        }
    }
    return -1
    
};

let maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]]
let entrance = [1,2]

console.log(nearestExit(maze, entrance))