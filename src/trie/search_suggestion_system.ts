// 1268. Search Suggestions System

function createNode() {
    const keys = new Map<string, ReturnType<typeof createNode>>()
    let end = false

    return {
        keys,
        setEnd: () => {
            end = true 
        },
        isEnd: () => end
    }
}

function createTrie () {
    const root = createNode()

    function insert(word) {
        let node = root
        
        for (let char of word) {
            if (!node.keys.has(char)) {
                node.keys.set(char, createNode())
            }
            node = node.keys.get(char)
        }
        node.setEnd()
    }

    function search(word) {
        let node = root

        for (let char of word) {
            if (!node.keys.has(char)) return false
            node = node.keys.get(char)
        }
        return node.isEnd() 
    }

    function startsWith(prefix) {
        let node = root
        for (let char of prefix) {
            if (!node.keys.has(char)) return false
            node = node.keys.get(char)
        }
        return true
    }

    function printWithPrefix (prefix) {
        const words = []
        let node = root

        for (let char of prefix) {
            if (!node.keys.has(char)) return words
            node = node.keys.get(char)!
        }

        function dfs (currentNode: ReturnType<typeof createNode>, path) {
            if (currentNode.isEnd() && words.length < 3) {
                words.push(path)
            }
            for (let [char, nextNode] of currentNode.keys) {
                dfs (nextNode, path + char)
            }
        }
        dfs(node, prefix)
        return words
    }
    return {
        insert, 
        search,
        startsWith, 
        printWithPrefix
    }

}

function suggestedProducts(products: string[], searchWord: string): string[][] {
    products = products.sort((a,b) => a.localeCompare(b))
    let trie = createTrie()
    for (let prod of products) {
        trie.insert(prod)
    }
    let arr = []
    let string =''
    for (let char of searchWord) {
        string = string + char
        arr.push(trie.printWithPrefix(string))
    }
    return arr
};

let products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"

console.log(suggestedProducts(products, searchWord))