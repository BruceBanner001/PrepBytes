// 04.07.2022

let relationship = "My Father's son";

let myName = 'Subramanian';
let myAge = 22;
let myAddress = "1234, ABC street, XYZ -  123";
let netWorth = 1000000;
let  wholeDetails = `My Name is ${myName} and my age is ${myAge}. My Address is ${myAddress} and net worth ${netWorth}`
console.log(wholeDetails);

//Backticks is used to write multi-line String 

let backticks = 
`One
Two
Three
and so on`;
console.log(backticks);

console.log(myName.charAt(4)); // a

console.log(myName.concat(myAge,myAddress)); //Subramanian221234, ABC street, XYZ -  123

console.log(myName.startsWith('Sub')); //true
console.log(myName.startsWith('U')); //false

console.log(myName.endsWith('an')); //ture
console.log(myName.endsWith('N')); //false

console.log(wholeDetails.endsWith(00000000000000000000000)); //true because my wholeDetails ends with 0

console.log(wholeDetails.includes('Address')); //true

console.log(wholeDetails.indexOf('Name')); // 3
console.log(wholeDetails.indexOf('name')); // -1

console.log(wholeDetails.lastIndexOf('and')); //84

console.log(wholeDetails.lastIndexOf('and')); //84

console.log(wholeDetails.length); //105  index of [0 - 104]

console.log(wholeDetails.lastIndexOf(0)); //104

console.log(wholeDetails.replace('and', '.')); //and will be replaced with . only first occurance of the string
//it dosen't modify the original string.

console.log(wholeDetails);
//My Name is Subramanian and my age is 22. My Address is 1234, ABC street, XYZ -  123 and net worth 1000000

console.log(wholeDetails.replaceAll('and', '.')); //all the "and" will be repalced with "." in the string.
//it dosen't modify the original string.

console.log(wholeDetails.search('and')); // 23. return first occurance.
console.log(wholeDetails.search(/and/)); // 23. return first occurance.

console.log(myName.repeat(2));// SubramanianSubramanian

console.log(myName.substring(3, 6)); // ram . starting from 3 and end with exclusive of 6th index.
console.log(myName.substr(3, 6)); //ramani . starting from 2 and end with 6 characters.
console.log(myName.substring(3, 0)); //Sub.  return from 0 to exclusive of index of 3.
//if the end index is less than starting index and it will be reverse the index and find the value.

console.log(myName.slice(0, 9)); //Subramani . 

let names =  "Mani, Diva, Iyyappa   ";

console.log(names.split(',')); // (3) ['Mani', ' Diva', ' Iyyappa   ']
console.log(names.split(',')[2]); // Iyyappa . [0-9] (Iyyappa   )

console.log(names.trim()); //Mani, Diva, Iyyappa  //it only removes extra spaces in front and last only.

console.log(names.trim().split(',')[2]); //Iyyappa . [0-6] (Iyyappa)
// console.log(names.split(',').trim()[2]); // Will Show an TypeError.

let numbers = [1,2,3,4,5];
let resultNumbers = numbers.map(item => item * 2) //insted item we can use any variable name
console.log(resultNumbers); // (5) [2, 4, 6, 8, 10]

//item => item - 2         (5) [-1, 0, 1, 2, 3]
// item => 2 - item        (5) [1, 0, -1, -2, -3]


let resultNumbersOne = numbers.reduce((acc, curr) => acc = acc + curr, 0) // instead acc, curr we can use any variable name

console.log(resultNumbersOne); // 15 add all the numbers and returns intial value 0
// - returs -13  and initial value 0
// * reurns 120  and initial value 1
// / returns 0   and initial value 1