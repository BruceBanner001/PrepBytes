//Arrary

//In JavaScript array can store any kind of data type.
//3 Ways We can Create Array.

//1st Method.

const array = [123, true, null, 'Abc']
console.log(array);

// let array1 = ['Raja'];
// console.log(array1[0][1]);


//2nd Methond

const arrayMethodTwo = [];
arrayMethodTwo[0] = 'One';
arrayMethodTwo[1] = 'Two';
arrayMethodTwo[3] = 'Four';

console.log(arrayMethodTwo); // arrayMethodTwo[2] will return (empty) as result.

//3rd Method

const arrayMethodThree = new Array('Bruce', 'Noone');
console.log(arrayMethodThree);

//Push Method

arrayMethodThree.push(3);
console.log(arrayMethodThree);

// arrayMethodTwo[2] = 'three';
// console.log(arrayMethodTwo);

//Pop Method

arrayMethodThree.pop();
console.log(arrayMethodThree);

//Check the type of the Variable

// Number = number
//String = string
//Boolean =  boolean
//null = object
//undefined = undefined
//Array = object

console.log(typeof array);

//Swap two variables without using creating another variable

a = 30;
b = 40;
console.log(`a = ${a} b = ${b}`);

console.log(`Swap of a = ${(a + b) - a} and b = ${(a + b) - b}`);