// 452. Minimum Number of Arrows to Burst Balloons

function findMinArrowShots(points: number[][]): number {
    points = points.sort((a,b) => a[1] - b[1])
    let count = points.length
    let prev = 0

    for (let i = 1; i < points.length; i++) {
        let current = points[i]
        let previous = points[prev]
        if (current[0] <= previous[1]) count --
        else prev = i
    }
    return count
};