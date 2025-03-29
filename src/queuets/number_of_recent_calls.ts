// 933. Number of recent calls 

class RecentCounter {
    main: number[]
    constructor() {
        this.main = []
    }

    ping(t: number): number {
        this.main.push(t)

        while(this.main.length > 0 && this.main[0] < t-3000) {
            this.main.shift()
        }
        return this.main.length
    }
}