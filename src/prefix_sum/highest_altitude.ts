// 1732. Find the highest altitude

function largestAltitude(gain: number[]): number {
    let max = 0
    let j = 0

    for (let i = 0; i < gain.length; i++) {
        j = j + gain[i]
        if (max < j) max = j
    }
    return max
};