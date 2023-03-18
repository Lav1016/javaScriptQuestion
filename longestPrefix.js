
function longestCommonPrefix(strings) {  //takes in an array of strings
    if (strings.length === 0) {
        return "";
    }
    let prefix = strings[0];

    for (let i = 1; i < strings.length; i++) {
        while (strings[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length === 0) {
                return "";
            }
        }
    }

    return prefix;
}


const strings = ["hello", "helmet", "helpful", "helium"];
console.log(longestCommonPrefix(strings)); // Output: "hel"

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
}

console.log(strword(word))

// methods 2
let myString = 'abababc';
let result = {};
for (let str of myString) {
  result[str] = result.hasOwnProperty(str) 
}
console.log(result);
