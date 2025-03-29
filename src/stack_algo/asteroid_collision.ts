// 735. asteroid Collision

function asteroidCollision(asteroids: number[]): number[] {
    let stuck = [asteroids[0]]

    let i = 1

    while (i < asteroids.length) {
        let j = stuck.length - 1
        let current = asteroids[i]
        if (j < 0) {
            stuck.push(current)
            i++
            continue
        }
        if (Math.abs(stuck[j]) < Math.abs(current) && stuck[j] > 0 && current < 0) {
            stuck.pop()
        } else if (Math.abs(stuck[j]) > Math.abs(current) && stuck[j] > 0 && current < 0) {
            i++
        } else if (stuck[j] > 0 && current < 0 && current + stuck[j] === 0) {
            stuck.pop()
            i++
        } else {
            stuck.push(current)
            i++
        }
    }
    return stuck
};