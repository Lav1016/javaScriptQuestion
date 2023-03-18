// function sayhi() {
//   let name = "rahul";

//   console.log(name);
//   console.log(age);
//   let name = "rahul";
//   let age = 20;
// }
// sayhi();

//2. o/p?
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i),1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

3. 
// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// let a =2;  // lexical environment;
// function abc(){
//   a = 4;
// console.log(a);
// }

// abc();

// tricky question
// let a = 2;
// setTimeout(() => {
//   a = 4;
// }, 2000)

// while(true){
//   console.log(a)
// }

// arr = [1,2,3,4,5,6,7,8,9];
arr = [1,2,3]; //16

 const sum = arr.reduce((acc, initialValue) => {  //1
 acc = acc + initialValue;
 return acc;
},10)
console.log(sum)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2);
// console.log("citrus",citrus);

// using slice 
const array = [21,10,24,41,2,3,6,5,7,8,5]
// const usingSliceMeth = array.slice(2,7)

const newArray = (arr,size) =>{
  const resArray = [];
  for(let i =0;i <arr.length; i += size){
    let sliceArr = arr.slice(i, i+size)
    resArray.push(sliceArr);
  }
  // return resArray
  console.log("resArray",resArray)
}
newArray(array, 2)