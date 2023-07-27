// function solution(a: number[]): number[] {
//   const heights: number[] = a.filter((height) => height !== -1);

//   heights.sort((a, b) => a - b);

//   let index = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== -1) {
//       a[i] = heights[index];
//       index++;
//     }
//   }

//   return a;
// }

// solution([-1, 150, 190, 170, -1, -1, 160, 180]);
