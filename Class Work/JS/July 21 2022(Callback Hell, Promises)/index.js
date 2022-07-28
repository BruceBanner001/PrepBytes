//21.07.2022

//Callback Hell -  Callbacks are just the name/convention  for using JavaScript.
// It instead of immediately returning result like other functions, taken time to produce the result.
// So, if we stuck in some particular call which prevents us from making  further calls ends us into Callback Hell.
// The structure of Callback Hell looks like pyramid/arrow shape.
// This makes our code look haphazard  and make it hard to understand.
// We should always try to avoid  using multiple Callbacks to end up falling into callback hell.

const getEmpId = () => {
    setTimeout(() => {
        console.log("Fetching the ID's");
        let id = [1, 2, 3, 4, 5];
        console.log(id);

        setTimeout(() => {
            let empDetails ={
                fName: 'Subramanian',
                lName: 'Thayuman',
                age: 22,
            }
            console.log(`The Name of the Employee is ${empDetails.fName} ${empDetails.lName} and the Age is ${empDetails.age}`);
            setTimeout(() => {
                empDetails.gender = 'Male';
                console.log(`The Name of the Employee is ${empDetails.fName} ${empDetails.lName} and the Age is ${empDetails.age} and the Gender is ${empDetails.gender}`);
            },2000)

        },2000)

    },2000)
}

// getEmpId();

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