/* Codewars
Create a function that accepts dimensions, of Rows x Columns, as parameters
 in order to create a multiplication table sized according to the given 
 dimensions. **The return value of the function must be an array, and the 
 numbers must be Fixnums, NOT strings.

Example:

multiplication_table(3,3)

1 2 3
2 4 6
3 6 9

-->[[1,2,3],[2,4,6],[3,6,9]]

Each value on the table should be equal to the value of multiplying the number
 in its first row times the number in its first column.
*/

function multiplicationTable(row,col){
  let matrix = [];
  for(let i = 1; i <= row; i++) {
    let vector = [];
    for(let j = 1; j <= col; j++) {
      vector.push(i * j);
    }
    matrix.push(vector);
  }
  return matrix;
}

function matrixDisplay(matrix) {
  let table = "";
  for(const row of matrix) {
    for(const col of row)
      table += col + '\t';
    table += '\n';
  } 
  return table;
}

// Testing
console.log(matrixDisplay(multiplicationTable(2, 2)));  // [[1,2],[2,4]]
console.log(matrixDisplay(multiplicationTable(3, 3)));  // [[1,2,3],[2,4,6],[3,6,9]]
console.log(matrixDisplay(multiplicationTable(3, 4)));  // [[1,2,3,4],[2,4,6,8],[3,6,9,12]]
console.log(matrixDisplay(multiplicationTable(4, 4)));  // [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]]
console.log(matrixDisplay(multiplicationTable(2, 5)));  // [[1,2,3,4,5],[2,4,6,8,10]]
console.log(matrixDisplay(multiplicationTable(10, 10)));
