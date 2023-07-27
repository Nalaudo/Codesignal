// function solution(sequence: number[]): boolean {
//   let count: number = 0;

//   for (let i = 1; i < sequence.length; i++) {
//     if (sequence[i] <= sequence[i - 1]) {
//       count++;

//       if (
//         count > 1 ||
//         (i > 1 &&
//           sequence[i] <= sequence[i - 2] &&
//           i < sequence.length - 1 &&
//           sequence[i + 1] <= sequence[i - 1])
//       ) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// solution([1, 3, 2]);
