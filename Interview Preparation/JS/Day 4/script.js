//Day 4(04.08.2022)

//Temporal Dead Zone ?

// It is the area of block where a variable is inaccessible until
// the moment computer initialization it wit a value.
// let and const.
function tdz() {
    console.log(a); //100
    // console.log(b); //ReferenceError
    var a = 100;
    let b = 20;
}
tdz();

//What is for-in loop in JavaScript ? Give its Syntax ?

// for in loop is used to iterate object's key and values. we can use iterate array as well.

// syntax:

// for(let i in obj){
    //Code Here
// }

//Example:

const object1 = {
    name: 'Subramanian',
    age: 22
}

for (let i in object1) {
    console.log(object1[i]);
}

// Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

//Local Scope:

// Local Scope occurs when you create a variable inside a function. By doing that, the visibility and accessibility of the variable is only allowed within that function.

// Block Scope:

// This scope restricts the variable that is declared inside a specific block, from access by the outside of the block. The let & const keyword facilitates the variables to be block scoped. In order to access the variables of that specific block, we need to create an object for it.

// Functional Scope:

// Each function creates a new scope. Variables defined inside a function are not accessible (visible) from outside the function. Variables declared with var , let and const are quite similar when declared inside a function.

// Scope Chain:

// Whenever our code tries to access a variable during the function call, it starts the searching from local variables. And if the variable is not found, it'll continue searching in its outer scope or parent functions' scope until it reaches the global scope and completes searching for the variable there.

//Global Variable : 

// A global variable is a variable that is declared in the global scope in other words, a variable that is visible from all other scopes. In JavaScript it is a property of the global object.

// What is difference between null and undefined and where to use what?

//null and undefined are primitive data type.

// null

// null is a special value that represents an empty or unknown value. For example, let number = null; The code above suggests that the number variable is empty at the moment and may have a value later.
//null means "empty."

//undefined:
//When we declare a variable with let or var without initializing value. if we trying to print the variable, it will print 'undefined'.
// undefined is a special variable type used to indicate that something is missing.
//undefined means "empty".

// what is Symbol?

// Symbol is a primitive data type of JavaScript
// Symbols are "immutable" and "Unique".
// It was introduced in ES6.
let symbol = Symbol('a');
let symbol1 = Symbol('a');
if(symbol === symbol1){
    console.log(true)
}
else{
    console.log(false)//will print
}

// Write code to explain map and filter in arrays ?

// Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both non-primitive and primitive values as either key or value. When we iterate over the map object it returns the key, value pair in the same order as inserted.
// It was introduced in ES6.


const array = [10, 20, 30, 40, 50];
const arr1 = array.map(i => i * 2);
console.log(arr1);

let objMap = {
    name: 'Raja',
    age : 22
}
console.log(objMap)
Object.keys(objMap).map((key, value) =>{
    objMap[key] += 4;
})
console.log(objMap)

// Filter:
// The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method "does not change the original array".

const arr2 = array.filter(i => i > 30);
console.log(arr2);
const arr3 = array.filter((element, index) => element > 1 && index > 0);
console.log(arr3);
// Explain passed by value and passed by reference ?

// Passed By Value:

// It only works with Primitive data type.
//If we made any changes in copied variable, this will not affect the original.
// Example:

let a = 10;
let b = a + 3;
console.log(a);
console.log(b);

// Passed By Reference:

// It only works with non-Primitive data type.
//If we made any changes in copied object or array, this will affect the original.
// Example:
let obj = {
    name: 'Subramanian',
    age: 22
}
let obj1 = obj;

obj1.name = 'Bruce';

console.log(obj1);
console.log(obj);

// Please explain Self Invoking Function(SIF) and its code ?

// Immediately-Invoked Function Expressions (IIFE), pronounced "iffy", are a common JavaScript pattern that executes a function instantly after it's defined. Developers primarily use this pattern to ensure variables are only accessible within the scope of the defined function.

// Example:
(function(){
    console.log('This is IIF Function');
})
();


// What is use strict JS?
// The "use strict" Directive

// It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.

//Example: 
x = 3.14;       // This will not cause an error.
//   myFunction();
  
  function myFunction() {
    "use strict";
    y = 3.14;   // This will cause an error
  }