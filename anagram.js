// function areAnagrams(word1, word2) {
//   if (word1.length !== word2.length) {
//     return false;
//   }

//   let word1Count = {};
//   let word2Count = {};

//   for (let i = 0; i < word1.length; i++) {
//     word1Count[word1[i]] = (word1Count[word1[i]] || 0) + 1;
//     word2Count[word2[i]] = (word2Count[word2[i]] || 0) + 1;
//   }

//   for (let key in word1Count) {
//     if (word1Count[key] !== word2Count[key]) {
//       return false;
//     }
//   }

//   return true;
// }
// console.log(areAnagrams("listen", "silent")); // Output: true
// console.log(areAnagrams("triangle", "integral")); // Output: true
// console.log(areAnagrams("hello", "world")); // Output: false


// Anagram checker////
const isAnagram = (str1, str2) => {
  // sorting  str1
  str1 = str1.split(' ').sort().join("");
  // sorting str2
  str2 = str2.split(' ').sort().join("");

  return str1 === str2;
};
let string1 = "hello";
let string2 = "hello";

console.log(isAnagram(string1, string2));



// write the code duplicate sorted array?