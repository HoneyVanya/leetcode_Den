// 2542. Maximum Subsequence Score
function maxScore(nums1, nums2, k) {
    let max = 0;
    let pairs = [];
    for (let i = 0; i < nums1.length; i++) {
        pairs.push([nums1[i], nums2[i]]);
    }
    pairs.sort((a, b) => b[1] - a[1]);
    let minHeap = [];
    let minHeapSum = 0;
    for (let i = 0; i < k - 1; i++) {
        minHeapAdd(minHeap, pairs[i][0]);
        minHeapSum += pairs[i][0];
        if (minHeap.length > k - 1) {
            minHeapSum -= minHeapPop(minHeap);
        }
    }
    for (let i = k - 1; i < pairs.length; i++) {
        let score = (minHeapSum + pairs[i][0]) * pairs[i][1];
        max = Math.max(score, max);
        minHeapAdd(minHeap, pairs[i][0]);
        minHeapSum += pairs[i][0];
        if (minHeap.length > k - 1) {
            minHeapSum -= minHeapPop(minHeap);
        }
    }
    return max;
}
;
function minHeapAdd(heap, item) {
    heap.push(item);
    let i = heap.length - 1;
    let parent = Math.floor((i - 1) / 2);
    while (heap[i] < heap[parent]) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
        parent = Math.floor((i - 1) / 2);
    }
}
function minHeapPop(heap) {
    let item = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    let i = 0;
    let minChild = findMinChild(heap, i);
    while (heap[i] > heap[minChild]) {
        [heap[i], heap[minChild]] = [heap[minChild], heap[i]];
        i = minChild;
        minChild = findMinChild(heap, i);
    }
    return item;
}
// function findMinChild (heap, i) {
//     let leftChild = 2 * i + 1
//     let rightChild = 2 * i + 2
//     if (!heap[rightChild] || heap[leftChild] < heap[rightChild]) return leftChild
//     else return rightChild
// }
// _________________________________________________________________// _________________________________________________________________
// function maxScore(nums1: number[], nums2: number[], k: number): number {
//     const n = nums1.length;
//     // Create array of pairs: [nums2[i], nums1[i]]
//     const pairs: [number, number][] = Array.from({ length: n }, (_, i) => [nums2[i], nums1[i]]);
//     // Sort descending by nums2[i] (we want higher mins first)
//     pairs.sort((a, b) => b[0] - a[0]);
//     let heap: number[] = []; // this will act like a min-heap for nums1
//     let heapSum = 0;
//     let max = 0;
//     for (let [minNum2, num1Val] of pairs) {
//         heap.push(num1Val);
//         heapSum += num1Val;
//         if (heap.length > k) {
//             heap.sort((a, b) => a - b); // simulate pop min
//             heapSum -= heap.shift();
//         }
//         if (heap.length === k) {
//             max = Math.max(max, heapSum * minNum2);
//         }
//     }
//     return max;
// }
