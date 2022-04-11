/**
 * Simple Text Editor - FILO - Objects - Instructions
 * Implement a simple text editor. The editor initially contains
 * an empty string, S. Perform Q operations of the following 4 types:
 *
 * 1 - append(W) - Append string W to the end of S.
 * 2 - delete(k) - Delete the last k characters of S.
 * 3 - print(k) - Print the kth character of S.
 * 4 - undo() - Undo the last (not previously undone) operation
 * of type 1 or 2, reverting S to the state it was in prior to that operation.
 */

// A - Not efficient
function processData(input) {
  //Enter your code here
  const instructions = input.replace(/ /gi, "").split("\n").slice(1);

  const filo = [];
  let text = "";

  for (let inst of instructions) {
    if (inst[0] === "1") {
      filo.unshift(text);
      text += inst.slice(1);
    }
    if (inst[0] === "2") {
      filo.unshift(text);
      text = text.slice(0, -inst.slice(1));
    }
    if (inst[0] === "3") {
      console.log(text[inst.slice(1) - 1]);
    }
    if (inst[0] === "4") {
      text = filo.shift();
    }
  }
}

// B - Efficient
function processData(input) {
  //Enter your code here
  const instructions = input.replace(/ /gi, "").split("\n").slice(1);

  const filo = [];
  let text = "";
  const op = {
    1: (inst) => {
      filo.push(text);
      text += inst.slice(1);
    },
    2: (inst) => {
      filo.push(text);
      text = text.slice(0, -inst.slice(1));
    },
    3: (inst) => {
      console.log(text[inst.slice(1) - 1]);
    },
    4: (inst) => {
      text = filo.pop();
    },
  };

  for (let inst of instructions) {
    op[inst[0]](inst);
  }
}

const test = `10
  1 ewcgpjfh
  1 igqsbqyp
  1 qsdliigcj
  4
  3 15
  1 iilmgp
  2 8
  4
  2 18
  1 scwhors`;

processData(test);
