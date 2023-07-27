// function solution(matrix: number[][]): number {
//   let totalSum: number = 0;
//   const rows: number = matrix.length;
//   const columns: number = matrix[0].length;

//   for (let col = 0; col < columns; col++) {
//     for (let row = 0; row < rows; row++) {
//       if (matrix[row][col] === 0) {
//         break;
//       }
//       totalSum += matrix[row][col];
//     }
//   }

//   return totalSum;
// }

// solution([
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ]);
