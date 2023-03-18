// // print 1 to 100 but 50 55
// // const number = () => {
// //   for (let i = 1; i <= 100; i++) {
// //     if (i === 50) {
// //       i = 62;
// //     }
// //     console.log(i);
// //   }
// // };

// // number();

// // find the occrence vowels
// // let vowels = ["a", "e", "i", "o", "u"];
// // const getvowels = (str) => {
// //   let vowelsCount = 0; // nitial count of zero.
// //   for (let i = 0; i <= str.length; i++) {
// //     if (vowels.includes(str[i])) {
// //       vowelsCount++;
// //     }
// //   }
// //   return vowelsCount;
// // };

// // //.log(getvowels("singhaniauua"));

// // find the flat array
// const array = ["2", "10", "12", "e", "l", "25", 35, 42, 54, 88, 1, "sakir"];
// const converttonumber = array.map((str) => {
//   return parseInt(str);
// });

// const flatarr = (arr) => {
//   let newarr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (!!arr[i]) {
//       newarr.push(arr[i]);
//     }
//   }

//   return newarr;
// };
// // //.log(flatarr(converttonumber ));

// // faltern nested array
// const flatternarray = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]];
// const arr = [
//   [
//     [0],
//     [
//       [
//         [
//           [
//             [
//               [
//                 [
//                   [
//                     [
//                       [
//                         [
//                           [
//                             [
//                               [
//                                 [
//                                   [
//                                     [
//                                       [
//                                         [
//                                           [
//                                             [
//                                               [
//                                                 [
//                                                   [
//                                                     [
//                                                       [
//                                                         [
//                                                           1,
//                                                           [
//                                                             2,
//                                                             [
//                                                               3,
//                                                               [
//                                                                 4,
//                                                                 [
//                                                                   5,
//                                                                   [
//                                                                     6,
//                                                                     [
//                                                                       7,
//                                                                       [
//                                                                         [
//                                                                           [
//                                                                             [
//                                                                               [
//                                                                                 [
//                                                                                   [
//                                                                                     [
//                                                                                       8,
//                                                                                     ],
//                                                                                   ],
//                                                                                 ],
//                                                                               ],
//                                                                             ],
//                                                                           ],
//                                                                         ],
//                                                                       ],
//                                                                     ],
//                                                                   ],
//                                                                 ],
//                                                               ],
//                                                             ],
//                                                           ],
//                                                         ],
//                                                       ],
//                                                     ],
//                                                   ],
//                                                 ],
//                                               ],
//                                             ],
//                                           ],
//                                         ],
//                                       ],
//                                     ],
//                                   ],
//                                 ],
//                               ],
//                             ],
//                           ],
//                         ],
//                       ],
//                     ],
//                   ],
//                 ],
//               ],
//             ],
//           ],
//         ],
//       ],
//     ],
//   ],
//   [[2], [3]],
//   [[4], [5]],
// ];

// // const flat = [];
// // const flatArr = (arr) => {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (Array.isArray(arr[i])) {
// //       flatArr(arr[i]);
// //     } else {
// //       flat.push(arr[i]);
// //     }
// //   }
// // };
// // flatArr(arr);
// // console.log(flat);

// // const arradd = [1, 2, 3, 4, 5, 8];

// // const arrsum = (sum) => {
// //   let result = 0; // intails result of  0
// //   for (let i = 0; i < sum.length; i++) {
// //     // result = result+sum[i]
// //     result += sum[i];
// //   }
// //   return result;
// // };
// // console.log(arrsum(arradd));

// // comapre two arr
// // const arr1 = [1, 2, 4, 5, 7]
// // const arr2 = [4, 5, 6,7,8];

// // // let newarry = [];
// // const addarr = (arr1,arr2) => {
// //   let sum = [] // intial sum 0;
// //   for (let i=0; i <arr1.length; i++) {
// //       sum.push(arr1[i] +arr2[i])

// //   }
// //   return sum
// // };

// // console.log(addarr(arr1,arr2));

const arr1 = [1, 2, 3, 5, 8, 5, 9, 1];
const arr12 = [3, 8, 1, 9];

const findsamenumber = (ele1, ele2) => {
  let result = [];
  for (let i = 0; i < ele1.length; i++) {
    for (let j = 0; j < ele2.length; j++) {
      if (ele1[i] === ele2[j] && !result.includes(ele1[i])) {
        result.push(ele1[i]);
      }
    }
  }
  return result;
};
console.log("____findsamenumber______",findsamenumber(arr1, arr12));

// // const array1 = ["cat", "sum", "fun", "run"]
// // const array2 = ["bat", "cat", "dog", "sun", "hut", "gut"];

// // const matchvalue = array1.filter((elements) =>array2.includes(elements))
// // console.log("hdh",matchvalue);

// var array1 = [
//   { name: "Joe", date: "2018-07-01", amt: 250 },
//   { name: "Mars", date: "2018-07-01", amt: 250 },
//   { name: "Joe", date: "2018-07-02", amt: 250 },
//   { name: "Saturn", date: "2018-07-01", amt: 351 },
//   { name: "Joe", date: "2018-07-02", amt: 300 },
//   { name: "Jupiter", date: "2018-07-01", amt: 25 },
// ];

// const findarr = (namedata) => {
//   //   const newarr = array1.filter((ele) => ele.name === namedata);
//   // const newarrbymap = array1.map((ele) =>ele.name)
//   const filterbyname = array1.filter((ele) => ele.name === namedata);
//   // console.log("new da", filterbyname);

//   // remove duplicate ids
//   //   const duplictearr = array1.reduce((unique, o) => {
//   //     if (
//   //       !unique.name === o.name &&
//   //       unique.date === o.date &&
//   //       unique.amt === o.amt
//   //     ) {
//   //       unique.push(o);
//   //     }
//   //     return unique;
//   //   }, []);

//   const arr = [...new Set(array1.map((els) => els.name))];
//   // console.log("duplicatye arr", arr);
// };

// findarr("Joe");

// var devs = [
//   {
//     name: "A",
//     age: 26,
//     tech: ["JavaScript", "React"],
//     addr: {
//       country: "India",
//       city: "Pune",
//     },
//   },
//   {
//     name: "B",
//     age: 25,
//     tech: ["Node", "AngularJs"],
//     addr: {
//       country: "USA",
//       city: "NY",
//     },
//   },
//   {
//     name: "C",
//     age: 27,
//     tech: ["React", "AWS"],
//     addr: {
//       country: "UK",
//       city: "London",
//     },
//   },
// ];

// // using filter

// // const techarr = (name) => {
// //   const techbyfilter = devs
// //     .filter((ele) => ele.tech.includes("React"))
// //     .map((obj) => ({ "name": obj.name, "tech": obj.tech ,"addr":obj.addr}));

// //   console.log("filter", techbyfilter);
// // };
// // techarr("A");

// const person = {
//   name: "luv",
//   location: "delhi",
//   company: "chetu",
//   experience: 2,
//   team_lead: "Ravi",
//   tech: "Node JS",
// };

// // by using for in loop
// const convertkeypair = (obj) => {
//   let result = [];
//   let value = [];
//   for (const key in obj) {
//     result.push(key);
//     value.push(obj[key]);
//   }
//   console.log("____", result);
//   console.log("____", value);
// };

// convertkeypair(person);

// const objToArr = (obj) => {
//   const keys = Object.keys(obj);
//   const vals = Object.values(obj);
//   const entries = Object.entries(obj);

//   return {
//     keys,
//     vals,
//     entries,
//   };
// };

// // console.log(objToArr(person));

// const tree = {
//   value: 1,
//   left: {
//     value: 2,
//     left: {
//       value: 4,
//     },
//     right: {
//       value: 5,
//     },
//   },
//   right: {
//     value: 3,
//     left: {
//       value: 6,
//     },
//     right: {
//       value: 7,
//     },
//   },
// };

// const traverseTree = (treeStrct) => {
//   console.log(treeStrct.value);
//   if (treeStrct.left) traverseTree(treeStrct.left);
//   if (treeStrct.right) traverseTree(treeStrct.right);
// };

// traverseTree(tree);

var peoples = [
  { name: "Joe", date: "2018-07-01", amt: 250 },
  { name: "Mars", date: "2018-07-01", amt: 250 },
  { name: "Joe", date: "2018-07-01", amt: 250 },
  { name: "Saturn", date: "2018-07-01", amt: 351 },
  { name: "Joe", date: "2018-07-02", amt: 300 },
  { name: "Jupiter", date: "2018-07-01", amt: 25 },
];


const comparator = (obj1, obj2) => {
  let matched = true;
  Object.keys(obj1).forEach((key) => {
    if (obj1[key] !== obj2[key]) {
      matched = false;
      return matched;
    }
  });
  return matched;
};

const uniqueObj = () => {
  for (let i = 0; i < peoples.length; i++) {
    for (let j = i + 1; j < peoples.length; j++) {
      if (comparator(peoples[i], peoples[j])) {
        peoples = peoples.filter((p, x) => x !== j);
      }
    }
  }
};
uniqueObj();
console.log(peoples);

// const comparator = ( duplicateobj) => {
//   // const repeatobj = [...new Set(duplicate.map((sameobj) =>sameobj.name))]
//   // console.log("repeatobjects ",repeatobj);

//   // const newobj = Object.keys(peoples);
//   // console.log(newobj);
//   let result = {};
//   for (let i= o; i<duplicateobj.length ;i++){
//     for( let j= i+1; i<duplicateobj.length ;j++){
//       if(duplicateobj[i] ===duplicateobj[j]){

//         break;

//       }
//     }
//   }
//   console.log("mcdcj")

// };
// comparator(peoples);







