/* Trace That Matrix
Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

As an example, for:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
... the trace is 1 + 5 + 9 = 15.

Write a function that takes a square matrix and computes its trace.

Examples
trace([
  [1, 4],
  [4, 1]
]) ➞ 2

// 1 + 1 = 2

trace([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ 15

// 1 + 5 + 9 = 15

trace([
  [1, 0, 1, 0],
  [0, 2, 0, 2],
  [3, 0, 3, 0],
  [0, 4, 0, 4]
]) ➞ 10

// 1 + 2 + 3 + 4 = 10
Notes
As in the examples, the size of the matrices will vary (but they will always be square).
*/

/*
const trace = m => {
    let sum = 0;
    for(let i = 0; i < m.length; i++) {
        sum += m[i][i];
    }
    return sum;
}*/

const trace = m => m.reduce((s, a, i) => s + a[i], 0);

console.log(trace(
  [[1, 4],
   [4, 1]]
), 2)

console.log(trace(
  [[1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]]
), 15)


console.log(trace(
  [[12345]],
), 12345)


console.log(trace(
  [[1, 0, 1, 0],
   [0, 2, 0, 2],
   [3, 0, 3, 0],
   [0, 4, 0, 4]]
), 10)

console.log(trace(
  [[0, 1, 0, 1],
   [2, 0, 2, 0],
   [0, 3, 0, 3],
   [4, 0, 4, 0]]
), 0)

console.log(trace(
  [[1, 8,  9, 16],
   [2, 7, 10, 15],
   [3, 6, 11, 14],
   [4, 5, 12, 13]]
), 32)
