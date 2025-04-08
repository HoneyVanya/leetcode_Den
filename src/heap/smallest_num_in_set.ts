// 2336. Smallest Number in Infinite Set

class SmallestInfiniteSet {
    private set = new Set<number>()
    private arr: number[] = []
    private current: number = 1

    

    popSmallest(arr): number {
        if (this.arr.length === 0) return this.current++
        let pop = this.arr[0]
        this.arr[0] = this.arr[this.arr.length - 1]
        this.arr.pop()
        heapify(this.arr, 0, this.arr.length)
        this.set.delete(pop)
        return pop
    }

    addBack(num: number): void {
        if (num < this.current && !this.set.has(num)) {
            this.set.add(num)
            this.arr.push(num) 
            let idx = this.arr.length - 1
            let parent = Math.floor((idx - 1) / 2)
            while (this.arr[idx] < this.arr[parent]) {
                [this.arr[idx], this.arr[parent]] = [this.arr[parent], this.arr[idx]]
                idx = parent
                parent = Math.floor((idx - 1) / 2)
            }
        }
    }
}
function heapify(arr, i, heapsize) {
        let smallest = i
        let left = 2 * i + 1
        let right = 2 * i + 2

        if (right < heapsize && arr[right] < arr[smallest]) smallest = right
        if (left < heapsize && arr[left] < arr[smallest]) smallest = left
        if (smallest !== i) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
            heapify(arr, smallest, heapsize)
        }
    }

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */