// 2462. Total Cost to Hire K Workers

// function totalCost(costs: number[], k: number, candidates: number): number {
//     let queue = []
//     let i = 0
//     let j = costs.length - 1
//     let cost = 0
//     while (i <= j && (i < candidates || j >= costs.length - candidates)) {
//         if (i < candidates) {
//             enqueue(queue, costs[i])
//             i++
//         }
//         if (j >= costs.length - candidates) {
//             enqueue(queue, costs[i])
//             j--
//         }
//         while (queue.length >= candidates * 2 && k > 0) {
//             cost += dequeue(queue)
//             k--
//         }
//     }
//     while (k > 0 && queue.length) {
//         cost += dequeue(queue)
//         k--
//     }
//     return cost
// };

// function enqueue (heap, num) {
//     heap.push(num)
//     if (heap.length > 1) {
//         let i = heap.length - 1
//         let parent = Math.floor((i - 1) / 2)

//         while (i > 0 && heap[i] < heap[parent]) {
//             [heap[i], heap[parent]] = [heap[parent], heap[i]]
//             i = parent
//             parent = Math.floor((i - 1) / 2)
//         }
//     }
// }

// function dequeue (heap) {
//     let pop = heap[0]
//     heap[0] = heap[heap.length - 1] 
//     heap.pop()
//     let i = 0
//     let minChild = findMinChild(heap, i)

//     while (heap[minChild] < heap[i]) {
//         [heap[i], heap[minChild]] = [heap[minChild], heap[i]]
//         i = minChild
//         minChild = findMinChild(heap, i)
//     }
//     return pop
// }

// function findMinChild(heap, i) {
//     let left = i * 2 + 1
//     let right = i * 2 + 2

//     if (left >= heap.length) return -1
//     if (right >= heap.length) return left
//     return heap[left] < heap[right] ? left : right
// }

function totalCost(costs: number[], k: number, candidates: number): number {
    let leftQueue = []
    let rightQueue = []
    let i = 0
    let j = costs.length - 1
    let cost = 0

    while (leftQueue.length < candidates && i <= j) {
        enqueue(leftQueue, costs[i++]);
    }

    while (rightQueue.length < candidates && i <= j) {
        enqueue(rightQueue, costs[j--]);
    }

    while (k--) {
        const leftMin = leftQueue.length > 0 ? leftQueue[0] : Infinity;
        const rightMin = rightQueue.length > 0 ? rightQueue[0] : Infinity;

        if (leftMin <= rightMin) {
            cost += dequeue(leftQueue); 
            if (i <= j) enqueue(leftQueue, costs[i++]);
        } else {
            cost += dequeue(rightQueue);
            if (i <= j) enqueue(rightQueue, costs[j--]);
        }
    }

    return cost
};

function enqueue(heap, num) {
    heap.push(num)
    let i = heap.length - 1
    let parent = Math.floor((i - 1) / 2)
    while (i > 0 && heap[i] < heap[parent]) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]]
        i = parent
        parent = Math.floor((i - 1) / 2)
    }
}

function dequeue(heap) {
    const pop = heap[0]
    heap[0] = heap[heap.length - 1]
    heap.pop()

    let i = 0
    let minChild = findMinChild(heap, i)
    while (minChild < heap.length && heap[minChild] < heap[i]) {
        [heap[i], heap[minChild]] = [heap[minChild], heap[i]]
        i = minChild
        minChild = findMinChild(heap, i)
    }
    return pop
}

function findMinChild(heap, i) {
    let left = 2 * i + 1
    let right = 2 * i + 2
    if (right >= heap.length) return left;
    return heap[left] < heap[right] ? left : right;
}
