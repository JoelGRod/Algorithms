/**
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

/**
 * Queue using Two Stacks - FIFO - First In First Out
 * A queue is an abstract data type that maintains
 * the order in which elements were added to it,
 * allowing the oldest elements to be removed from
 * the front and new elements to be added to the rear.
 * This is called a First-In-First-Out (FIFO) data structure
 * because the first element added to the queue (i.e., the one
 * that has been waiting the longest) is always
 * the first one to be removed.
 *
 * A basic queue has the following operations:
 * Enqueue: add a new element to the end of the queue.
 * Dequeue: remove the element from the front of the queue and return it.
 *
 * In this challenge, you must first implement a
 * queue using two stacks. Then process  queries,
 * where each query is one of the following  types:
 *
 * 1 x: Enqueue element  into the end of the queue.
 * 2: Dequeue the element at the front of the queue.
 * 3: Print the element at the front of the queue.
 */

function processData(input) {
  //Enter your code here
  const queueList = input.replace(/\n/gi, " op-").split(" ");

  let enqueue = false;
  const list = [];

  queueList.forEach((value, idx) => {
    if (idx === 0) return;
    if (value === "op-1") {
      enqueue = true;
      return;
    }
    if (enqueue) {
      list.push(value);
      enqueue = false;
      return;
    }
    if (value === "op-2") {
      list.shift();
      return;
    }
    if (value === "op-3") {
      console.log(list[0]);
    }
  });
}

function processDataExtra(input) {
  //Enter your code here
  const queueList = input.replace(/\n/gi, " op-").split(" ");
  const list = [];

  queueList.forEach((value, idx) => {
    if (idx === 0) return;
    switch (value) {
      case "op-1":
        break;
      case "op-2":
        list.shift();
        break;
      case "op-3":
        console.log(list[0]);
        break;
      default:
        list.push(value);
    }
  });
}

function processDataExtraTwo(input) {
  //Enter your code here
  const queueList = input.replace(/\n/gi, " op-").split(" ");
  const list = [];

  queueList.forEach((value, idx) => {
    if (idx === 0) return;
    if (value === "op-1") {
      return;
    }
    if (value === "op-2") {
      list.shift();
      return;
    }
    if (value === "op-3") {
      console.log(list[0]);
      return;
    }
    list.push(value);
  });
}

/**
 * Balanced Brackets - FILO - First In Last Out
 * A bracket is considered to be any one of the following
 * characters: (, ), {, }, [, or ].
 *
 * Two brackets are considered to be a matched pair if the
 * an opening bracket (i.e., (, [, or {) occurs to the left of
 * a closing bracket (i.e., ), ], or }) of the exact same type.
 * There are three types of matched pairs of brackets: [], {}, and ().
 *
 * A matching pair of brackets is not balanced if the set of
 * brackets it encloses are not matched. For example, {[(])}
 * is not balanced because the contents in between { and }
 * are not balanced. The pair of square brackets encloses a
 * single, unbalanced opening bracket, (, and the pair of
 * parentheses encloses a single, unbalanced closing square bracket, ].
 *
 * By this logic, we say a sequence of brackets is balanced if
 * the following conditions are met:
 * - It contains no unmatched brackets.
 * - The subset of brackets enclosed within the confines of a matched pair
 * of brackets is also a matched pair of brackets.
 *
 * Given n  strings of brackets, determine whether each sequence of
 * brackets is balanced. If a string is balanced, return YES.
 * Otherwise, return NO.
 */

function isBalanced(s) {
  // Write your code here
  const brackets = "{}[]()<>";
  const filo = [];

  for (let bracket of s) {
    let bracketIdx = brackets.indexOf(bracket);
    if (bracketIdx === -1) continue;
    if (bracketIdx % 2 === 0) {
      filo.unshift(bracketIdx + 1);
    } else {
      if (filo.shift() !== bracketIdx) return "NO";
    }
  }
  return "YES";
}
