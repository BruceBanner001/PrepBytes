
//let :(introduced in ES6)
//1. we can Declare the Variable Name in one line and initialize on another line.
//2. The variables with same name aren't possible with let.
//3. We can reassign/update the value of the variable.
//4. let is block scoped.
//5. let doesn't supports hoisting (Hoisting allows functions to be safely used in code before they are declared. Hoisting is a JavaScript Mechanism where variables and function declarations are moved to the top of the scope internally before the code execution.)

//Sync vs Async Functions:

// Synchronous code runs in sequence. This means that each operation must wait for the previous one to complete before executing. Asynchronous code runs in parallel. This means that an operation can occur while another one is still being processed.

//Closures
{/* <h2>Closures ?</h2>
        <li>
            It is a Combination of inner function and lexical(variable) environment of outer function.
        </li>
        <li>
            Its not something that we create manually or explicitly.
        </li>
        <li>
            A closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
</li>*/}


// CALL, BIND AND APPLY IN JAVASCRIPT------------------
// These are just different ways of invoking or calling a function
//  When you are calling a function using any of these 3 then you don't have to define in the function that it will be taking obj as a parameter
// It will assume that the first argument which is coming while calling the function will be an object only.
//creating an object for the reference

//It helps you change the context of the invoking function

let user = {
    name: "Shubham",
    age: 23,
    salary: 50000,
    city: "Ahmedabad"
}
let user2 = {
    name: "Vishnu",
    age: 21,
    salary: 60000,
    city: "Kashmir"
}
// creating a function which will be using this object
// When using call bind or apply
function UserDetails(company, designation) {
    // console.log("Hello inside function", this);
    console.log(this.name + " is " + this.age + " years old. ", company, " ", designation);
}
//  Call : In case of call each and every argument which is required to be passed to the function will be passed individually.
UserDetails.call(user2, "Google", "Backend Developer");
//  Apply : In case of apply each and every argument which is required to be passed to the function will be passed inside an array .
UserDetails.apply(user2, ["Amazon", " Full Stack Developer"]);
// Bind : In case of bind, it will return you a new function. And this new function you can use anytime anywhere.
const newFunction = UserDetails.bind(user);
newFunction("Flipkart", "Data Scientist")



// 1. First Class Functions
// First Class Function : It is also called first class citizen function, there are three points
// to remember are below:

// 1. Function can be assigned to a variables.
let myFunction = function () {
    console.log('This is function that is assigned to a variable');
}
myFunction();

// 2. Function can be passed as an argument to other function.
function printHello() {
    console.log("Hi I am function passed as an argument so I am a first class Function");
}
function executeFn(functionAsArgument) {
    functionAsArgument();
}
executeFn(printHello); // passing printHi function as an argument

// 3.Function can be returned from other function
function getFunction() {
    return function () {
        console.log("I am function returned from another function so i am a first-class function")
    }
}
let fn = getFunction();
fn(); // this will call the returned function

//Higher Order Functions - A functions which accepts another function as an argument or returns a function are called as Higher Order Functions. The function accepting First Class Functions as an argument are called as HOFn's.

//Callback Functions - These are those kind of functions which are called back after a certain period of time or passed as values which can be called back as and when required.

// Write code to explain map and filter and reduce in arrays ?

// Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both non-primitive and primitive values as either key or value. When we iterate over the map object it returns the key, value pair in the same order as inserted.
// It was introduced in ES6.


const array = [10, 20, 30, 40, 50];
const arr1 = array.map(i => i * 2);
console.log(arr1);

const mapOne = new Map([
    ['fName', 'Subramanian'],
    ['lName', 'Thayuman'],
    [true, '18+'],
    [22, 'Age'],
    []
])
console.log(mapOne);

//Method 2.

const mapTwo = new Map();
mapTwo.set('Mobile','Android');
mapTwo.set('Car','Lamborghini');
mapTwo.set(11000, 'Price');
mapTwo.set('Age', 22);

// Filter:
// The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method "does not change the original array".

const arr2 = array.filter(i => i > 30);
console.log(arr2);
const arr3 = array.filter((element, index) => element > 1 && index > 0);
console.log(arr3);

// Reduce:
// The reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function's accumulated result. The reduce() method does not execute the function for empty array elements. The reduce() method does not change the original array.
let arr = [1,2,3,4,5];
const total = arr.reduce((curr,acc) =>{
    return curr + acc;
})
console.log(total);

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

// What is Spread Operator ?

{/* <h2>What is the Spread Operator ?</h2>
        <p>
            It is new operator that introduced in ES6.
            The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
            Syntax - ...array
        </p> */}

//Promises - Promises are used to handle asynchronous operations in JavaScript.
// They are easy to manage when dealing with multiple asynchronous operations when callbacks can create callback hell leading to unmanageable code. 
// It also allow us to make API calls or fetch data from Web Servers successfully. 
// If not able to do so fetch us with error message.
// It have three stages.

// 1.Pending        2.Resolved(fulfilled)       3.Rejected

const getId = new Promise((resolve, reject) => { //Producer  //We have to take resolve, reject as it is. These 2 are executor function.
    setTimeout(() => {
        let id = [1, 2, 3, 4, 5];
        resolve(id);
        reject('Error in fetching details')
    }, 2000);
});

getId       //Consumer
    .then((data) => {               //This is pointing resolve
        console.log('The data is resolved is ' ,data);
    })
    .catch((error) => {             //This is pointing reject
        console.log(error);
    })
    .finally(() => {
        console.log('The end of the Promise');
    })

    //Callback Hell -  Callbacks are just the name/convention  for using JavaScript.
// It instead of immediately returning result like other functions, taken time to produce the result.
// So, if we stuck in some particular call which prevents us from making  further calls ends us into Callback Hell.
// The structure of Callback Hell looks like pyramid/arrow shape.
// This makes our code look haphazard  and make it hard to understand.
// We should always try to avoid  using multiple Callbacks to end up falling into callback hell.

//Event Loop :JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

// Callback Queue: After the timer gets expired, the callback function is put inside the Callback Queue, and the Event Loop checks if the Call Stack is empty and if empty, pushes the callback function from Callback Queue to Call Stack and the callback function gets removed from the Callback Queue.