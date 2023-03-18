// Array.prototype.add = function (num) {
//   const arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(this[i] + num);
//   }
//   return arr;
// };

// const Danish = [2,4,6,8];
// const Dan = Danish.add(2);
// console.log(Dan);

// write a prototype  multiply

Array.prototype.multiply = function (multi) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] * 3);
  }
  console.log("multiply", arr);
};
const valueofmulti = [2, 5, 6, 3, 4];
const value = valueofmulti.multiply(2);

// //[2,4,6,8] --- < 4 == [2,4]
// Array.prototype.Oppfilter = function (callback) {
//   const arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i])) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };

// const a = Danish.Oppfilter((item) => item > 4);
// console.log(a);

console.trace = function (heading, val) {
  console.log(heading);
  console.log("***************************************************");
  console.log("***************** " + val + " *********************");
  console.log("***************************************************");
  console.log("");
  console.log("");
  console.log("");
};

/**
 * Create a prototype methods to return the sum of all the numbers in a given array.
 * `Prototype` method name will be sum and can be use as arr.sum();
 *
 * @example [1,'a','','2',undefined,3,5,'5',6] => 1 + 2 + 3 + 5 + 5 + 6 = 22
 */

const nums = [
  "1",
  "2",
  "3",
  "5",
  "a",
  "b",
  "",
  "",
  5,
  6,
  "c",
  "k",
  undefined,
  null,
  NaN,
];

Array.prototype.sum = function () {
  //Write your solution here
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    const num = parseInt(this[i]);
    if (!Number.isNaN(num)) {
      sum = sum + num;
    }
  }
  return sum;
};

const sum = nums.sum();
console.trace("SUM", sum);

/**
 * Create a prototype methods of a string to count the number of vowels
 * `Prototype` method name will be countVowels and can be use as str.countVowels();
 *
 * @example 'suboor' => 3
 */

String.prototype.countVowels = function () {
  //Write your solution here
  let count = 0;
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  for (let i = 0; i < this.length; i++) {
    if (vowels[this[i]])
     count++;
  }

  return count;
};

const str = "suboor";
const count = str.countVowels();
console.trace("VOWELS COUNT", count);

// find the charecter
String.prototype.countOf = function (char) {
  let charvalue = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === char) {
      charvalue++;
    }
  }
  return charvalue;
};

const stringName = "suboor";
const newChar = stringName.countOf("0");
console.trace("newChar", newChar);

// function currying(a) {
//     return function(b) {
//       return function (c){
//         return function (d){
//           console.log(a + b +c +d)

//         }

//       }
//     }
// }
// // currying(1)(10)(1)(2)
// const secondFunc = currying(1)
// secondFunc(2)(2)(5)

/**
 *   write a  array prototype and find the prime number
 * @example [2,3,7,9,11,13]
 */

Array.prototype.primeNumber = function () {
  // let arrPrime = [];
  let isPrime = true;
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0) {
      // arrPrime.push(this[i])
      isPrime = false;
    }
  }
};

const array = [10, 25, 65, 2, 3, 5, 4, 7, 9];
const arrNumber = array.primeNumber(3);
console.log("is prime Number ", arrNumber);

const objects = {
  name: "Stacey",
  age: 35,
  heritage: "Irish",
};

const child = Object.create(objects);
(child.name = "ryan"), (child.age = 12), (child.heritag = "indian");

console.log(child.name);
console.log(child.age);
console.log(child.heritag);

// write a array of prototype
function isEven(x) {
  return x % 2 === 0;
}

function isOdd(y) {
  return y % 2 !== 0;
}
function isgreaterthan(x) {
  return x > 5;
}

Array.prototype.filteredArray = function (callback) {
  const filterArray = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? filterArray.push(this[i]) : null;
  }
  //return filterArray;
  console.log("oddNumber", filterArray);
};
const arr = [1, 2, 3, 4, 5, 7];
arr.filteredArray(isgreaterthan);

// Using our own filterFunction() prototype implementation
function calculated(operations) {
  switch (operations) {
    case "Add":
      return function (a, b) {
        console.log(`${a} +${b} = ${a + b}`);
      };
    case "SUBTRACT":
      return function (a, b) {
        console.log(`${a}- ${b} = ${a - b}`);
      };
    case "MULTIPLY":
      return function (a, b) {
        console.log(`${a} * ${b} = ${a * b}`);
      };
  }
}
const calculationAdd = calculated("ADD");
console.log("_________", calculationAdd);

// reverse string 
const stringReverse = (string) => {
let result = ""
for( let charecter of string){
  // result = charecter + result;
  result += charecter;
}
// return result;
console.log("reverse string-------", result)
}
stringReverse("hello")

// using methods 
const revStringusingsplit = (string) =>{
  const result = string.split("").reverse().join()
  console.log("---------------",result)
}
revStringusingsplit("hello")

/**
 * @example write a Array prototype find the flat array 
 */



 Array.prototype.flatArray = function(){
  let newArray = []
  for (let i=0; i<this.length; i++){
    if(!isNaN(this[i])){
      newArray.push(parseInt(this[i]));
    }
  }
  return newArray
}

const arraynew = ["2", "10", "12", "e", "l", "25", 35, 42, 54, 88, 1, "sakir"];
const newone = arraynew.flatArray()

console.log("****** flat Array******", newone)

//
const arr1 = [1, 2, 3, 5, 8, 5, 9, 1];
const arr12 = [3, 8];
//find the same value in two array using filter
const findsamenumbyfilter = arr1.filter((elemnets) =>arr12.includes(elemnets))
console.log("findsamenumbyfilter", findsamenumbyfilter)

// const word = "aaaaabbbccccddddeeee";


