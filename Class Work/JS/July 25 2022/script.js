//Async/Await - 
// It was introduced in ES8
//  They used to handle promises  more efficiently.
//  The word async before a function always means that the function always "returns a promise". So, we therefore use async before the function name to return a promise instead of a value.
//  Await is used to wait for the result that  is to be returned from the promise. So, we use await when we are calling a function which returns a promise.
//  Also, we can use them(Async/Await) for making API calls.
//  Await is always used with Async only.

// async  // Example for Async functions promise setTimeOut(), callback

// async function tryingPromises(){// continued with line 2
//     console.log('I am inside the function using async/await');//3
//     const response=  await fetch("https://api.github.com/users");//4.th line initiated but not finished.
//     //i will also continue from here later, because i am asked to wait but i have other options to execute other lines also.
//     console.log('Before the response is fetched');//8
//     const users =  await response.json();
//     console.log('User Resolved');//9
//     return users;
// }
// console.log('Before Calling the function'); //1
// let data = tryingPromises();//2
// console.log('After calling the function');// 5. this was the 4th line that got completed.
// console.log('data received', data);// 6
// data.then((res) => {
//     console.log(res);//10
// })
// console.log('End of Code');//7 


// console.log('------------------------------------');

const functionOne = () => {
    return 'I am Function One';
}
const functionTwo =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I am Function Two');
        }, 3000);
    })
}
const functionThree = () => {
    return 'I am Function Three';
}
const callAllFunctions = async () => {
    let responseOne = functionOne();
    console.log(responseOne);

    let responseTwo = await functionTwo();
    console.log(responseTwo);

    let responseThree = functionThree();
    console.log(responseThree);
}
// callAllFunctions();


const getId = new Promise((resolve, reject) => {
    setTimeout(() => {
        let id = [1, 2, 3, 4, 5];
        resolve(id);
        reject("Error in Fetching ID");
    }, 2000);
})

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

const getData = async () => {
    const id =  await getId;
    console.log(id);
    const empDetails = await getEmpDetails(id[2]);
    console.log(empDetails);
}
getData();

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