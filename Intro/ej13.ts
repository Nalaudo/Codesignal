// function solution(inputString: string): string {
//   const stack: string[] = [];
//   let result = "";

//   for (const char of inputString) {
//     if (char === "(") {
//       stack.push(result);
//       result = "";
//     } else if (char === ")") {
//       const lastResult = stack.pop() || "";
//       result = lastResult + result.split("").reverse().join("");
//     } else {
//       result += char;
//     }
//   }

//   return result;
// }

// solution("(bar)");
// solution("foo(bar)baz");
// solution("foo(bar)baz(blim)");
// solution("foo(bar(baz))blim");
