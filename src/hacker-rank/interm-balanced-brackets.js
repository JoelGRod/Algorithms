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

// A - Pretty but it not solves all test cases
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

// B - Solves all test cases
function isBalancedTwo(s) {
  // Write your code here
  const brackets = "{}[]()";
  const filo = [];

  for (let i = 0; i < s.length; i++) {
    let bracketIdx = brackets.indexOf(s[i]);
    if (bracketIdx === -1) continue;
    if (bracketIdx % 2 === 0 && i < s.length - 1) {
      filo.unshift(bracketIdx + 1);
    } else {
      if (filo.shift() !== bracketIdx) return "NO";
    }
  }
  return "YES";
}
