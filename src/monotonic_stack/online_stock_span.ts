// 901. Online Stock Span

class StockSpanner {
    stack: [number, number][]
    constructor() {
        this.stack = []
    }

    next(price: number): number {
        let span = 1
        while (this.stack.length && price >= this.stack[this.stack.length - 1][0]) {
            span += this.stack.pop()[1]
        }
        this.stack.push([price, span])
        console.log(this.stack)
        return span
    }

}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */