const names = ['suboor', 'sagar', 'luv', 'ravi', 'mukesh'];

// console.log(names[1]);
names.push('danish');
// console.log(names);

// names.pop();

// names.push('prashnat');

// console.log(names[names.length - 1]);

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// function findName(name) {
//   let found = false;
//   for (let i = 0; i < names.length; i++) {
//     if (name === names[i]) {
//       found = true
//     }
//   }
//   console.log(found);
// }
// findName('suboor');

// function abc(a,b) {
//     const sum =a+b
//     return a+b
//   }

//   const a = abc(1,2);
//   console.log(a);

// const array = [10, 20, 5, 45, 88, 99, 2, 1, 1];

// function largeNumber(arr) {
//   const largest = arr.length;
//   console.log(largest, " ----> length")
//   let bigNumber = arr[0];
//   for (let i = 0; i <= largest; i++) {
//     if (arr[i] > largest) {
//       bigNumber = arr[i];
//     }
//   }
//   return bigNumber;
// }

// print 1 to 100
// function number() {
//   for (let i = 0; i <= 100; i++) {
//     console.log(i);
//   }
// }
// number();//

// / add two numner
// const addNumber = (x,y)=>{
//     const sum = x+y
//     console.log(sum)
// }
// addNumber(1,5)

// // print 1 to 100
// function number(limit) {
//     for (let i = 0; i <=limit; i++) {
//         const multi= i*10
//       console.log(multi);
//     }
//   }
//    number(10);// call function

// wap convert to string into array using loops
// function stringIntoArray(stringArray){
//     let str =[]
//     for(let i=0; i<stringArray.length;i++){
//         str.push(stringArray[i])
//     }
//     console.log(str)
// }
// stringIntoArray("helloitsme")

// using the split function
// function stringIntoArray(char){
//      SplitMethods = char.split(',');
//     console.log(SplitMethods)

// }
// stringIntoArray("Hi Luv, its been a long time, I hope you are doing great.")

//wap using the split methods
// const numSplit = (int) => {
//     const ToStringMethods  = int.toString();
//     console.log(ToStringMethods.split(''))
// }
// numSplit(123);

//wap add one to all element of an array
// const oneAdd = (array)=>{
//     const arr = []
//     for(let i=0;i<array.length;i++){
//         const addSum = array[i]+1; // we can add and multple of array
//         console.log(addSum)
//         arr.push(addSum)
//    }
// }
// const newArray = [10,20,30,40,50,60,70]
// oneAdd(newArray)

// find the smallest number in array
// const smallestArraym = [25, 2, 45, 23, 26, 74, 2, 1];
// const smallnumber = (number) => {
//   let snumber = number[0];
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] < snumber) {
//       snumber = number[i];
//       // console.log("mdwdjiwqjdi",sNum)
//     }
//   }
//   console.log("dkwd", snumber);
// };

// smallnumber(smallestArraym)

// find the name present or not

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//   }
//   function findName(name) {
//     let found = false;
//     for (let i = 0; i < names.length; i++) {
//       if (name === names[i]) {
//         found = true
//       }
//     }
//     console.log(found);
//   }
//   findName('suboor');

// find the large number
// const array = [10,25,6,58,20,12,25,78]
// function largeNumber(bigNumber){
//     let number = bigNumber[0]
//     console.log("number ",number)
//     for(let i=0; i<bigNumber.length;i++){
//         if(bigNumber[i]> number){
//             number = bigNumber[i]
//         }

//     }
//     console.log("------>>>",number)
// }
// largeNumber(array)

// wap star pattern
// const star =()=>{
//     let n=5;
//     let string =''
//     for(let i=1; i<=n;i++){
//         for(let j=1;j<=i;j++){
//             string +="*"
//         }
//        string += ('\n') //after print new line
//     }
//     console.log(string)
// }
// star()

// find the even number
// const arr = [20,41,58,78,24,32,6,5,1,3,7]
// const filtereven =(evenNumber)=>{
//     const filterarray =[]
//     for(let i=0;i<=evenNumber.length;i++){
//         if(arr[i]%2==0){
//             filterarray.push(arr[i])
//         }
//     }
//     return filterarray;
// }
// console.log(filtereven(arr))

// find the odd number given
// const oddnumber =(odd)=>{
//     const oddarray=[]
//     console.log("____>>>>>",oddarray)
//     for(let i=0;i<=odd.length;i++){
//         if(arr[i]%2 !== 0){
//             oddarray.push(arr[i])
//         }
//         console.log(arr[i])
//     }
//     return oddarray;
// }
// console.log(oddnumber(arr))

// find filter map
// let arrayOfElements = [
//   {
//     name: "a",
//     subElements: [{ surname: 1 }, { surname: 2 }],
//   },
//   {
//     name: "b",
//     subElements: [{ surname: 3 }, { surname: 1 }],
//   },
//   {
//     name: "c",
//     subElements: [{ surname: 2 }, { surname: 5 }],
//   },
// ];

// const filetarray = arrayOfElements.filter((element) =>
//   element.subElements.some((subElements) => subElements.surname === 1)
// );
// console.log("***********", filetarray);

//

const empdata = [
  {
    name: "prashant",
    city: "noida",
    skill: "node",
    age: 25,
  },
  {
    name: "luv",
    city: "delhi",
    skill: "node",
    age: 26,
  },
  {
    name: "suboor",
    profile: "software engineer",
    city: "noida1",
    skill: "javascript",
  },
];

// const filterarray = empdata.filter((emp) => emp.skill === "node")
// const maparray = empdata.filter((employe) => employe.age === "age");
// console.log(
//   empdata.map((emp) => {
//     let age = undefined;
//     if (emp.age) {
//       age = emp.age + 1;
//     }
//     return {
//       ...emp,
//       age: age,
//     };
//   })
// );
// console.log(filterarray);

const findarray = empdata.find((emp)=> emp.city==="delhi")
const findindex = empdata.findIndex((emp)=>emp.name==="suboor")
console.log("findindex",findindex);
console.log("findarray",findarray);



// const names = empdata.map((emp) => emp.skill === "node");
// console.log(names);

// using map and forEech

const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];
// +___
const officerId = [];
// using forEach
officers.forEach((offiice) => {
  officerId.push(offiice.id);
});
console.log("______", officerId);

//using map
const usingmap = officers.map((officid) => officid.id);
console.log("using map", usingmap);

// using reduce
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

// const usingreduce = pilots.reduce(
//   (accumulator, pilots) => accumulator + pilots.years
// );
// console.log("using reduce ", usingreduce);

// find the total force use
const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

// using filter find the total force user
const totaluserforce = (totaluser) => {
  const forceuserbymap = totaluser.map(
    (ele) => ele.pilotingScore + ele.shootingScore
  );
  console.log("----------------", forceuserbymap);
};

totaluserforce(personnel);

// total force user using filter
const totaluser = (arr) => {
  const totaluserbyfilter = arr.filter((ele) => ele.isForceUser === true);
  console.log("-------------->>>>>>>>>--", totaluserbyfilter);
};

totaluser(personnel);

// using reduce totall score
// const toatlscore = (totalscore) => {
//   const totalscorebyreduce = totalscore.reduce((acc, score) => acc + score,0);
//   console.log("-------------->>>>>>>>>--", totalscorebyreduce);
// };
// toatlscore(personnel);

// const totalJediScore = personnel
//   .filter(person => person.isForceUser)
//   .map(jedi => jedi.pilotingScore + jedi.shootingScore)
//   .reduce((acc, score) => acc + score, 0);

//   console.log("kodwdw",  totalJediScore)

  