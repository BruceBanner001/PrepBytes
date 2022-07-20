// 19.07.2022

// Closures:

    // Its not something that we create manually or explicitly. It happens automatically in certain situations which we need to analyze / realize ourselves.
    // Closures makes a function remember all the variables that existed in the function birth place initially.
    //Any function always have access to the "Variable Environment" of the execution context in which the function was created.
    //A closure is a function having access to the parent scope, even after the parent function has closed.

const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
    // let passengerCount = 0; it will be called only once;
    //So, even though the execution context is destroyed, the "variable environment" somehow keeps living somewhere in the engine.
        console.log(`The count of the passengers are ${++passengerCount}`);
    }
}

const bookie = ticketBooking();
bookie();
bookie();
bookie();
console.dir(bookie); // check scope

ticketBooking()();
ticketBooking()();
ticketBooking()();

function one(){
    let pass = 0;
    pass++;
    console.log(pass);
}

one();
one();
one();

// let f;

// const g = function(){
//     const a = 30;
//     f = function(){
//         console.log(a * 2); //60
//     }
// }
// g();
// f(); // if i call the function before call g it will return TypeError: f is not a function.

let f;

const g = function(){
    const a = 30;
    f = function(){
        console.log(a * 2); //60
    }
}
const h = function(){
    const b = 20;
    f = function(){
        console.log(b * 2); //60
    }
}
g();
f(); 
console.dir(f);
h();
f();
console.dir(f);
