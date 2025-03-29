// 2095. Delete the middle node of a linked list

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }


 function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null
    let length = 0

    let current = head

    while (current !== null) {
        length++
        current = current.next
    }

    let middle = Math.floor(length/2)

    current = head
    let prev = null
    length = 0

    while (length < middle) {
        prev = current
        current = current.next
        length++
    }
    if (prev) {
        prev.next = current.next
    }
    return head
};
