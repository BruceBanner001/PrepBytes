// 05.07.2022

//Method 1 = function
//we have function name and function keyword.
function functionOne(){
    console.log('This is Function 1');
}

functionOne();

//Method 2 = fat arrow function
//we don't have function name and function keyword.
//we assigning it to variable. we can access this using variable name followed by paranthesis.
const functionTwo = () => {
    console.log('This is Function 2');
}
console.log(functionTwo);
functionTwo();
functionTwo; //when run nothing will happen

//Method 3 = anonymous function
//we have function keyword but not have function name insted we assinging
//function to variable. we can access this function using variable name followed by paranthesis.
const functionThree = function(){
    console.log('This is Function 3 and an anonymous function');
}
console.log(functionThree);
functionThree();


//Calling function with passing arguments and accepting with parameters.

const addition = (a, b) => {
    let result = 0;
    result = a + b;
    console.log(`Result of a = ${a} and b = ${b} is ${result}`);
}

addition(2, 4);
// addition(b=2, a=4);  //it will not change to order.

//Pure functions - This is a function which gives you same output for same input passed. It doesn't give you 
// different output for the same input every time we call the function. It doesn't depends on some variables 
// whose value might change in the future, and therefore always gives u same values. Examples a function which
//  only uses constants in their body.


function area(r){ // Pure function
    let result = 3.14 * r * r;
    console.log(result);
}
area(3);
area(3);
area(3);

function additionOne(a, b){ //impure function
    let result = 0; //the function will be determined by the variable inside. If the variable value change the output will change.
    result += a + b;
    console.log(result);
}
additionOne(1,3);