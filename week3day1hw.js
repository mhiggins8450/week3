// 1. //Already completed as example
// function maxOfTwoNumbers(x, y) {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
//   }
  
//   console.log(maxOfTwoNumbers(3, 9));

// 2. 
//   const maxOfThreeNumbers = function(x, y, z) {
//         if (x > y && x > z) {
//           return x;
//         } else if (y > x && y > z) {
//           return y;
//         } else {
//             return z;
//         }
//     }
      
//       console.log(maxOfThreeNumbers(3, 1, 8));

// 3.
//   const isCharAVowel = function(char) {
//         if (char === 'a') {
//           return 'vowel';
//         } else if (char === 'e') {
//             return 'vowel';
//         } else if (char === 'i') {
//             return 'vowel';
//         } else if (char === 'o') {
//             return 'vowel';
//         } else if (char === 'u') {
//             return 'vowel';
//         } else if (char === 'y') {
//             return 'Y is sometimes a consonant and sometimes a vowel';
//         } else {
//             return 'consonant'
//         }
//   }
      
//       console.log(isCharAVowel('y'));

// 4.
// const sumArray = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     return sum;
// }
  
//   console.log(sumArray([56,-87,90]));

// 5.
// function multiplyArray(numbers) {
//     let product = 1;
//     for (let i = 0; i < numbers.length; i++) {
//       product *= numbers[i];
//     }
//     return product;
//   }
  
//   console.log(multiplyArray([0,3,4]));