// 1926. Nearest Exit from Entrance in Maze
function nearestExit(maze, entrance) {
    let map = new Map();
    let exits = {};
    function graphMaker(maze) {
        for (let i = 0; i < maze.length; i++) {
            for (let j = 0; j < maze[i].length; j++) {
                map.set([i, j], maze[i][j]);
                if (i === 0 || i === maze.length - 1 || j === 0 || j === maze[i].length - 1) {
                    if (maze[i][j] === '.') {
                        exits[maze[i][j]];
                    }
                }
            }
        }
    }
    graphMaker(maze);
    console.log(map);
    console.log(exits);
    return 1;
}
;
let maze = [["+", "+", ".", "+"], [".", ".", ".", "+"]];
let entrance = [1, 2];
console.log(nearestExit(maze, entrance));
