// 933. Number of recent calls 
class RecentCounter {
    constructor() {
        this.main = [];
    }
    ping(t) {
        this.main.push(t);
        while (this.main.length > 0 && this.main[0] < t - 3000) {
            this.main.shift();
        }
        return this.main.length;
    }
}
