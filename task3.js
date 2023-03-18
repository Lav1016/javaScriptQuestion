// find the reapet  value
const word = "aaaaabbbccccddddeeee";

const strword = (str) => {
  let count = 1;
  let result = '';
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result = result + str[i] + count;
      count = 1;
    }
  }
  console.log("count",result);
};

strword(word);

// use hash

// never repeat value in objects
// const wordcountusinghashmap =(strcount)=>{
//     const hash = {}
//     for(let char of strcount){

//         hash[char] =  (hash[char] ||0) +1
//     }
//     let result = ''
//     for (let key in hash){
//         result += key +hash[key]
//     }
//     return result;

// }
// console.log(wordcountusinghashmap("aaaabbbccccddddeeee"))

// palindrom
// spilt return array

// const ispalindrom =(str)=>{
//     const reverse = str.split('').reverse().join("");
//     console.log("________",reverse)
//     if(str===reverse){
//         return true
//     }else{
//         return false
//     }
// }

// console.log("----------------",ispalindrom("car"))

// solve palindrom not using array prototype
// const ispalindrom = (str) => {
//   let result = true;
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] !== str[str.length - 1 - 1]) {
//       result = false;
//     }
//   }
//   return result;
// };
// console.log(ispalindrom("racecar"));

// palindrom
// function ispalindrom(str) {
//   let reverse = "";
//   for (let i = 0; i < str.length; i++) {
//     reverse = str[i] + reverse;
//   }
//   return reverse === str;
// }
// console.log(ispalindrom("racecar"));

// sum of array
// const numbers = [324, 23, 1, 2, 43, 55, 6, 4, 23, 23, 1, 23];

// const arrsum = (arr) => {
//   let result = 0; // nitial value of zero.

//   for (let i = 0; i < arr.length; i++) {
//     // for loop to iterate
//     result += arr[i]; // take every item in the array and add it to result variable
//   }
//   return result;
// };
// console.log(arrsum(numbers));

// sum of array using forEach
// const arraysum = (array) => {
//   let sum = 0;
//   array.forEach((ele) => {
//     // sum = sum + ele;
//     sum += ele;
//   });
//   console.log("--->>>>>>>>>", sum);
//   return sum;
// };
// arraysum(numbers);

// sum of array and not adding repeat value
// const number = [24, 25, 41, 45, 25, 65, 98, 25, 5, 10, 5, 10, 30, 45, NaN];

// const nonRepeatingSum = (sum) => {
//   sum = [...new Set(sum)];
//   let result = 0;
//   for (let i = 0; i < sum.length; i++) {
//     result += sum[i];
//   }

//   return result;
// };

// nonRepeatingSum(number);
const number = [24, 25, 41, 45, 25, 65, 98, 25, 5, 10, 5, "10", "ram"];
const nonrepeatvalue = (sum) => {
  let result = 0;
  for (let i = 0; i < sum.length; i++) {}
};

// find the second largest number
// const arr = [23, 21, 34, 34, 25, 45, 85, 69, 58];

// const secondlargestnumber = (nums) => {
//   for (let i = 1; i <= nums.length - 1; i++) {
//     for (let j = 0; j <= nums.length - 1; j++) {
//       if (nums[i] < nums[j]) {
//         var num = nums[i];
//         nums[i] = nums[j];
//         nums[j] = num;
//       }
//     }
//   }
//   console.log("-->>>", nums);
//   return nums[nums.length - 2];
// };

// console.log(secondlargestnumber(arr));

// remove null and undefined values
const array = [0, 1, null, 2, "", 3, undefined, 3, , , , , , 4, , 4, , 5, , 6, , , ,]
const filteredarr = array.filter((el) => {
  return el != null;
});
console.log("____--------------", filteredarr);
// find the unique age using loop and prototype methods
const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30];

// const newage = [...new Set(ages)] // SPREAD OPEREATOER
// function arr(agenum) {
//   let temp = {};
//   for (const age of agenum) {
//     temp[age] = true;
//   }
//   return temp;
// 
// }
// console.log("_________ unique age", arr(ages));

const uniqureAge = (age)=>{
  const fixAge = []
  for( let userage of age){
    fixAge.push(userage)
  }
  console.log("___fixedAge__", fixAge)
}
uniqureAge(ages)

//find the value 1
  const my_arr = [
    {id: 1, arr: [{subId: 1, value: 1}]},
    {id: 2, arr: [{subId: 2, value: 2}]},
    {id: 3, arr: [{subId: 3, value: 1}]},
 ]

const result = my_arr.flatMap((item) =>item.arr.filter((ids) =>ids.value ===1))
 console.log("______________",result)
