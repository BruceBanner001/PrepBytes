
// Question 1:

function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

// var counter = counter();
// alert(counter()); //1
// alert(counter()); //2
// alert(counter()); //3
// alert(counter()); //4


// Question 2:

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? Ans: 1 Reason: since if Condition is true, the count will be assigned with 1.
  }
  console.log(count); // What is logged? Ans: 0  Reason: count value is 0.
})
();


// Question 3:

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? Result: After 1sec  3 3 3 will print.
    }, 1000);
  }

// Question 4:

//   Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function rectangle(len){
    return function(breath){
        console.log(`The Area of Rectangle is ${len * breath}`);
    }
}
rectangle(8)(5);

// Question 5:

// Take a variable in outer function and create an inner function to increase the counter every time it is called

function increase(){
    let counter = 1;
    return function(){
        console.log(`The Counter is ${counter++}`);
    }
}
const increased = increase();
increased(); //1
increased(); //2
increased(); //3

// Question 6:

// "Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();  
// 12 

// Question 7:

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
// x();
// 12

// Question 8:

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz