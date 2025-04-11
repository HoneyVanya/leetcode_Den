// 208. Implement Trie (Prefix Tree)

// class Trie {
//     arr: string[] = []
//     constructor() {
        
//     }

//     insert(word: string): void {
//         this.arr.push(word)
//     }

//     search(word: string): boolean {
//         if (this.arr.includes(word)) return true 
//         else return false
//     }

//     startsWith(prefix: string): boolean {
//         for (let word of this.arr) {
//             if (word.startsWith(prefix)) return true 
//         }
//         return false 
//     }
// }

// /**
//  * Your Trie object will be instantiated and called as such:
//  * var obj = new Trie()
//  * obj.insert(word)
//  * var param_2 = obj.search(word)
//  * var param_3 = obj.startsWith(prefix)
//  */

interface TrieNode {
    [key: string]: TrieNode | boolean;
    isWord?: boolean;
}

class Trie {
    root: TrieNode

    constructor() {
        this.root = {} 
    }

    insert(word: string): void {
        let node = this.root
        for (let c of word) {
            if (!node[c]) node[c] = {}
            node = node[c] as TrieNode
        }
        node.isWord = true 
    }

    traverse (word) {
        let node = this.root

        for (let c of word) {
            if (!node[c]) return null
            node = node[c] as TrieNode
        }
        return node
    }

    search(word: string): boolean {
        let node = this.traverse(word)

        return node !== null && node !== undefined && node.isWord === true;
    }

    startsWith(prefix: string): boolean {
        return this.traverse(prefix) !== null
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */