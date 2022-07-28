
// const getMyName = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         const myName = "My Name is Subramanian";
//         resolve(myName);
//         reject("Problem in Fetching Details");
//     },2000);
// })
// getMyName
//     .then((data) => {
//         console.log('This is the data', data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() =>{
//         console.log('The end of Promise');
//     })

// const getId = new Promise((resolve, reject) => { //Producer  //We have to take resolve, reject as it is. These 2 are executor function.
//     setTimeout(() => {
//         let id = [1, 2, 3, 4, 5];
//         resolve(id);
//         reject('Error in fetching details') //Either of resolve or reject is executed on the 
//         //basis of data received. If received then resolve is called otherwise reject is called. Resolve
//         //hits the .then() method and the reject hits the .catch() method.
//     }, 2000);
// });

// const getEmpDetails = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((data) => {
//             let empDetails = {
//                 fName: 'Subramanian',
//                 lName: 'Thayuman',
//                 age: 22,
//             }
//             resolve(`The ID of the Employee is ${data} and Name of the Employee is ${empDetails.fName} ${empDetails.lName} and the Age is ${empDetails.age}`);
//             reject('Error in fetching details of getEmpDetails');
//         }, 2000, data);
//     })
// }
// getId
//     .then((id) => {
//         console.log('The ID is ', id);
//         getEmpDetails(id[1]).then((data) => {
//             console.log('The Data is ',data);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     })
//     .catch((err) => {
//         console.log(err);
//     });



// const getId = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let id = [1, 2, 3, 4, 5];
//         resolve(id);
//         reject("Error in Fetching ID");
//     }, 2000);
// })

// const getEmpDetails = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((data) => {
//             let empDetails = {
//                 fName: 'Subramanian',
//                 lName: 'Thayuman',
//                 age: 22,
//             }
//             resolve(`The ID of the Employee is ${data} and Name of the Employee is ${empDetails.fName} ${empDetails.lName} and the Age is ${empDetails.age}`);
//             reject('Error in fetching details of getEmpDetails');

//         }, 2000, data);
//     })
// }

// getId
//     .then((id) => {
//         console.log('The ID are ', id);
//         getEmpDetails(id[2]).then((data) => {
//             console.log(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     })
//     .catch((error) => {
//         console.log(error);
//     })

const promise =  new Promise((resolve, reject) => {
    resolve();
})

// promise
//     .then(() => {
//         setTimeout(() => {
//             console.log('First');
//         }, 2000);
//     })
//     .then(() => {
//         setTimeout(() => {
//             console.log('SEcond');
//         }, 3000);
//     })
//     .then(() => {
//         setTimeout(() => {
//             console.log('Third');
//         }, 1000);
//     })

// promise
//     .then(() => {
//         console.log('First');
//     })
//     .then(() => {
//         setTimeout(() => {
//             console.log('Second');
//         }, 3000);
//     })
//     .then(() => {
//         console.log('Third');
//     })

promise
    .then(() => {
        console.log('First');
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Second');
            }, 3000);
            resolve();
        })
    })
    .then(() => {
        console.log('Third');
    })