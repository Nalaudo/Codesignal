// function solution(statues: number[]): number {
//   statues.sort((a, b) => a - b);
//   let additionalStatues: number = 0;
//   for (let i = 1; i < statues.length; i++) {
//     additionalStatues += Math.max(0, statues[i] - statues[i - 1] - 1);
//   }
//   return additionalStatues;
// }

// solution([6, 2, 3, 8]);
