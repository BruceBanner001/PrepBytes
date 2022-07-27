// Create one function with zero parameter having a console statement;

function first(){
    console.log('Printing function with zero parameter');
}
first();

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(a, b){
    console.log(`Sum of ${a}, ${b} is ${a + b}`);
}
sum(3, 4);

// Create one arrow function

const multiply = (a, b) => {
    console.log(`Multiplication of ${a}, ${b} is ${a * b}`);
}
multiply(6, 6);

// "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

//Result : undefined
//Reason: var x = 21 will be override with x = 20. since the present var x value 20 and we printing x before it even it existence. 


// Print output:
var x = 21;
girl2 ();
console.log(x)
function girl2() {
    console.log(x);
    var x = 20;
};


//Result : line 39 Output : Undefined & line 37 Output: 21

// "Print output

// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };

//Result: Uncaught ReferenceError. 
//Reason: Since function expression doesn't support Hoisting. We can't use it before the function is declared.

// Write a function that accepts parameter n and returns factorial of n

const findFactorial = (number) => {
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact *= i;
    }
    console.log(fact);
}
findFactorial(5); // Result: 120