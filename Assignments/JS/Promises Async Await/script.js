// Write one example explaining how you can write a callback function ?

//Callback Functions - These are those kind of functions which are called back after a certain period of time or passed as values which can be called back as and when required.

const helloMyFriend = (name) => {
    console.log(`Hello, ${name}. Seeing you after a long time`);
}

const callBack = (nameOfMyFriend, callBackFunction) => {
    console.log('I will be calling the callBack Function helloMyFriend');
    callBackFunction(nameOfMyFriend);
}

callBack("Tony", helloMyFriend)


// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

// Explain callback hell.

//Callback Hell -  Callbacks are just the name/convention  for using JavaScript.
// It instead of immediately returning result like other functions, taken time to produce the result.
// So, if we stuck in some particular call which prevents us from making  further calls ends us into Callback Hell.
// The structure of Callback Hell looks like pyramid/arrow shape.
// This makes our code look haphazard  and make it hard to understand.
// We should always try to avoid  using multiple Callbacks to end up falling into callback hell.


// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
let condition = true;

const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (condition === true) {
            resolve();
        }
        reject('Promise Rejected');
    }, 3000);
})

newPromise
    .then(() => {
        console.log('Promise Resolved');
    })
    .catch((data) => {
        console.log(data);
    })



// Create examples to explain callback function

// const helloMyFriend = (name) => {
//     console.log(`Hello, ${name}. Seeing you after a long time`);
// }

// const callBack = (nameOfMyFriend, callBackFunction) => {
//     console.log('I will be calling the callBack Function helloMyFriend');
//     callBackFunction(nameOfMyFriend);
// }

// callBack("Tony", helloMyFriend)

const callBackFun = () =>{
    setTimeout(() => {
        console.log('i am called after 2 secs');
    }, 2000);
}
// callBackFun();


// Create examples to explain callback hell function

const hell = () =>{
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/12',
        type: 'GET',
        success: function (value) {
            setTimeout(() => {
                console.log(value.userId);
                setTimeout(() => {
                    console.log(value.id);
                    setTimeout(() => {
                        console.log(value.title);
                        setTimeout(() => {
                            console.log(value.completed);
                        }, 5000);
                    }, 4000);
                }, 3000);
            }, 2000);
        }
    })
}
// hell();


// Create examples to explain promises function

// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (condition === true) {
//             resolve();
//         }
//         reject('Promise Rejected');
//     }, 3000);
// })

// newPromise
//     .then(() => {
//         console.log('Promise Resolved');
//     })
//     .catch((data) => {
//         console.log(data);
//     })

const getId = new Promise((resolve, reject) => { 
        setTimeout(() => {
            let id = [1, 2, 3, 4, 5];
            resolve(id);
            reject('Error in fetching details') 
        }, 2000);
    });
    
    const getEmpDetails = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout((data) => {
                let empDetails = {
                    fName: 'Subramanian',
                    lName: 'Thayuman',
                    age: 22,
                }
                resolve(`The ID of the Employee is ${data} and Name of the Employee is ${empDetails.fName} ${empDetails.lName} and the Age is ${empDetails.age}`);
                reject('Error in fetching details of getEmpDetails');
            }, 2000, data);
        })
    }
    getId
        .then((id) => {
            console.log('The ID is ', id);
            getEmpDetails(id[1]).then((data) => {
                console.log('The Data is ',data);
            })
            .catch((error) => {
                console.log(error);
            })
        })
        .catch((err) => {
            console.log(err);
        });
