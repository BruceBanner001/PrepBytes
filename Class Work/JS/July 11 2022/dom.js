// 12.07.2022

//Function

// hello(); // This will be hoisted only
// hi(); // They aren't Hoisted
// sayHi(); // They aren't Hoisted

// If i use var instead const, this will become variable we can't 
// call them using hi() , instead we can call hi; if we want use before even declared.


//function definition / declaration / statement
function hello(){ //Normal / General Function
    console.log('hello');
}

var hi = () => {  //Fat arrow Function
    console.log('hi');
}

// var sayHi = function() { // Function Expressions / Anonymous Function
//     console.log('Say Hi');
// }

//Fat arrow function and function expressions doesn't hoisting irrespective of the var keyword assigned to the variable.

// hi();
// sayHi();

// Anonymous Function - A function which doesn't have a name associated with it. It's generally used in Function Expressions.

//Named Function Expressions  - A Function Expressions which has a name associated with the functions.


var sayHi = function heyHi(a){
    console.log('Say Hi');
    a();
}

sayHi(function hey(){
    console.log('Hey');
}); // Will Work
// heyHi(); //ReferenceError 

//First Class Functions - A function can be passed as values/ arguments into another functions or can be returned from the functions. This dual capability of the functions make them call as First Class Functions. They are also called First Class Citizens.

//hey() is a First Class Function.

const letsGo = function(){
    return function(){
        console.log('I am being returned as a function');
    }
}
letsGo()(); /// I am being returned as a function


//Higher Order Functions - A functions which accepts another function as an argument or returns a function are called as Higher Order Functions. The function accepting First Class Functions as an argument are called as HOFn's.


// sayHi() and letsGo() are Higher Order Functions

//hey() and function(){console.log('I am being returned as a function');} are First Class Functions.

//Callback Functions - These are those kind of functions which are called back after a certain period of time or passed as values which can be called back as and when required.

setTimeout(() => {
    console.log('I am being called after 2 Secs');
}, 2000);


function catchCallBack(param){
    console.log('A');
    console.log('B');
    console.log('C');
    console.log('D');
    param();
}
catchCallBack(function sentAsArguments(){
    console.log('I am the one who will be call back as and required');
})

//param() is a call back function.
// --------------------------------------
const sayHii = (friend) => {
    console.log('Hey Hi', friend + " Thanks !!");
}
const greetHi = (nameOfFriend, callBackFunc) => {
    console.log('I will be calling the callback function named sayHi. Watch it out!!');
    callBackFunc(nameOfFriend); // sayHi("Mani")
}
greetHi('Mani', sayHii); // Calling the Function