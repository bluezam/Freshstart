/* You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list. */
/**
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

let mergeTwoLists = function(l1, l2) {
    let fh = new ListNode(-1);
    let current = fh;
    while(l1 || l2){

        if(l2 == null || (l1 !== null && l1.val <= l2.val)){
            fh.next = l1;
            fh = fh.next;
            l1 = l1.next;
        } else {
            fh.next = l2;
            fh = fh.next;
            l2 = l2.next;
        }
    }
    return current.next;
};