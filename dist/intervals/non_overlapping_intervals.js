// 435. Non-overlapping Intervals
function eraseOverlapIntervals(intervals) {
    intervals = intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let prev = 0;
    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        let previous = intervals[prev];
        if (current[0] < previous[1])
            count++;
        else
            prev = i;
    }
    return count;
}
;
