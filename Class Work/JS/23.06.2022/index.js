//23.06.2022

//let :(introduced in ES6)
//1. we can Declare the Variable Name in one line and initialize on another line.
//2. The variables with same name aren't possible with let.
//3. We can reassign/update the value of the variable.
//4. let is block scoped.
//5. let doesn't supports hoisting (Hoisting allows functions to be safely used in code before they are declared. Hoisting is a JavaScript Mechanism where variables and function declarations are moved to the top of the scope before the code execution.)

let myName;
console.log(myName);
myName = "Mani";
console.log(myName);
myName = "Bruce";
console.log(myName);

console.log("--------let End--------")

//const : (introduced in ES6)
//1. Must declare and initialize variable in the same line itself.
//2. The variables with same name aren't possible with const.
//3. We can't reassign/update the value of the variable.
//4. const is block scoped.
//5. const doesn't supports hoisting (Hoisting is a JavaScript Mechanism where variables and function declarations are moved to the top of the scope before the code execution.)

const myAge = 15;
console.log(myAge);

console.log("--------const End--------")

//var :
//1. we can Declare the Variable Name in one line and initialize on another line.
//2. The variables with same name are possible with var.
//3. We can reassign/update the value of the variable.
//4. let is global scoped.
//5. var supports hoisting (Hoisting is a JavaScript Mechanism where variables and function declarations are moved to the top of the scope before the code execution.)

var myCountry;
myCountry = "India";
console.log(myCountry);
myCountry = "Russia";
console.log(myCountry)

var myCountry = "Antartica";
console.log(myCountry);

console.log("--------var End--------")

//Functions are Hoisted. Because of that we can access the function even before declaring them.
addition()
console.log(addition) // Returns function definition
function addition(){
    var result = 4 * 5;
    console.log(result)
}

console.log("--------function End--------")

//undefined - When we try to access a variable that is declared. It moves the function declaration to the top of the scope internally. but not initialized.
//not defined - When we try to access a variable that is not declared. It moves the function declaration to the top of the scope internally..
//null - Its a value that we can initialize to a variable which will later be replaced with some other value.

let myPlace = null;
console.log(myPlace);
myPlace = "Trichy";
console.log(myPlace);

//console.llog(myArea)  //Example for not defined

console.log("--------The End--------")