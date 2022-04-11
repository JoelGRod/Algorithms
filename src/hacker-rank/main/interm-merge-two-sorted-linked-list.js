/**
 * Merge Two Sorted linked Lists
 * Given pointers to the heads of two sorted linked lists,
 * merge them into a single, sorted linked list.
 * Either head pointer may be null meaning that the corresponding
 * list is empty.
 *
 * Sample Input
 * 1 3 1 2 3 2 3 4
 *
 * Sample Output
 * 1 2 3 3 4
 *
 */

function mergeLists(head1, head2) {
  if (head1 !== null && head2 !== null) {
    if (head1.data < head2.data)
      return { data: head1.data, next: mergeLists(head1.next, head2) };
    else return { data: head2.data, next: mergeLists(head1, head2.next) };
  }
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  else return null;
}
