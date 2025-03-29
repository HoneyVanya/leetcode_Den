// 2130. Maximum twin sum of a linked list
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function pairSum(head) {
    let current = head;
    let count = 0;
    while (current) {
        current = current.next;
        count++;
    }
    let mid = count / 2;
    count = 0;
    current = head;
    let prev = null;
    let newList = null;
    while (current) {
        let next = current.next;
        if (count === mid) {
            newList = current;
            prev.next = null;
        }
        prev = current;
        current = next;
        count++;
    }
    current = newList;
    prev = null;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    newList = prev;
    current = head;
    let current1 = newList;
    let max = 0;
    while (current) {
        let sum = current.val + current1.val;
        max = Math.max(max, sum);
        current = current.next;
        current1 = current1.next;
    }
    return max;
}
