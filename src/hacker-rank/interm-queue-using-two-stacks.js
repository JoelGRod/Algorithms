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
