// 215. Kth Largest Element in an Array 

// genious approach
// function findKthLargest(nums: number[], k: number): number {
//     const countingLen = 2e4 + 1;
//     const counting = new Int32Array(countingLen);

//     for (const num of nums) {
//         counting[num + 1e4]++;
//     }

//     for (let i = countingLen - 1; i >= 0; i--) {
//         k -= counting[i];
//         if (k <= 0) {
//             return i - 1e4;
//         }
//     }
// };


//my approach 

function findKthLargest(nums: number[], k: number): number {
    function heapify (arr, idx, heapsize) {
        let largest = idx 
        let left = 2 * idx + 1
        let right = 2 * idx + 2

        if (left < heapsize && arr[left] > arr[largest]) largest = left 
        if (right < heapsize && arr[right] > arr[largest]) largest = right 
        if (largest !== idx) {
            [arr[idx], arr[largest]] = [arr[largest], arr[idx]]
            heapify(arr, largest, heapsize)
        }
    }
    function buildMaxHeap (arr) {
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            heapify(arr, i, arr.length)
        }
    }

    function heapSort (arr) {
        buildMaxHeap (arr) 
        for (let i = arr.length - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]]
            heapify(arr, 0, i)
        }
        return arr
    }
    return heapSort(nums)[nums.length - k]
};