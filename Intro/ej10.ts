// function solution(s1: string, s2: string): number {
//   const freqMapS1: object = {};

//   for (const char of s1) {
//     freqMapS1[char] = (freqMapS1[char] || 0) + 1; //Chequea si el char ya está como prop en freqMapS1, si está incrementa su valor en 1
//   }

//   let commonCharsCount: number = 0;

//   for (const char of s2) {
//     if (freqMapS1[char] && freqMapS1[char] > 0) {
//       commonCharsCount++;
//       freqMapS1[char]--;
//     }
//   }

//   return commonCharsCount;
// }

// solution("aabcc", "adcaa");
