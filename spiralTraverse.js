// export function spiralTraverse(matrix) {
//   let result = [];
//   spiralFill(result, matrix, 0, matrix.length - 1, 0, matrix[0].length - 1);
//   return result;
// }

// function spiralFill(result, matrix, startRow, endRow, startColumn, endColumn) {
//   if (startRow > endRow || startColumn > endColumn) {
//     return;
//   }
//   for (let column = startColumn; column <= endColumn; column++) {
//     result.push(matrix[startRow][column]);
//   }
//   startRow++;
//   for (let row = startRow; row <= endRow; row++) {
//     result.push(matrix[row][endColumn]);
//   }
//   endColumn--;
//   if (endRow >= startRow) {
//     for (let column = endColumn; column >= startColumn; column--) {
//       result.push(matrix[endRow][column]);
//     }
//   }
//   endRow--;
//   if (endColumn >= startColumn) {
//     for (let row = endRow; row >= startRow; row--) {
//       result.push(matrix[row][startColumn]);
//     }
//   }
//   startColumn++;
//   spiralFill(result, matrix, startRow, endRow, startColumn, endColumn);
// }
export function spiralTraverse(matrix) {
  let result = [];
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startColumn = 0;
  let endColumn = matrix[0].length - 1;
  while (endRow >= startRow && endColumn >= startColumn) {
    for (let column = startColumn; column <= endColumn; column++) {
      result.push(matrix[startRow][column]);
    }
    startRow++;
    for (let row = startRow; row <= endRow; row++) {
      result.push(matrix[row][endColumn]);
    }
    endColumn--;
    if (endRow >= startRow) {
      for (let column = endColumn; column >= startColumn; column--) {
        result.push(matrix[endRow][column]);
      }
    }
    endRow--;
    if (endColumn >= startColumn) {
      for (let row = endRow; row >= startRow; row--) {
        result.push(matrix[row][startColumn]);
      }
    }
    startColumn++;
  }
  return result;
}