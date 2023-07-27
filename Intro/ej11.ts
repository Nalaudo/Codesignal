// function solution(n: number): boolean {
//   const digits = n.toString().split("").map(Number);
//   const halfLength = digits.length / 2;
//   let firstHalfSum: number = 0;
//   let secondHalfSum: number = 0;

//   for (let i = 0; i < digits.length; i++) {
//     if (i < halfLength) {
//       firstHalfSum += digits[i];
//     } else {
//       secondHalfSum += digits[i];
//     }
//   }

//   return firstHalfSum === secondHalfSum;
// }

// solution(1230);
// solution(239017);
