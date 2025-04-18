// 208. Implement Trie (Prefix Tree)
class Trie {
    constructor() {
        this.root = {};
    }
    insert(word) {
        let node = this.root;
        for (let c of word) {
            if (!node[c])
                node[c] = {};
            node = node[c];
        }
        node.isWord = true;
    }
    traverse(word) {
        let node = this.root;
        for (let c of word) {
            if (!node[c])
                return null;
            node = node[c];
        }
        return node;
    }
    search(word) {
        let node = this.traverse(word);
        return node !== null && node !== undefined && node.isWord === true;
    }
    startsWith(prefix) {
        return this.traverse(prefix) !== null;
    }
}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */ 
