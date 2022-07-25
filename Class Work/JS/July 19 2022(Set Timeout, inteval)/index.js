
// function timeOut(){
//     console.log('I am called after 4 seconds');
// }

// // setTimeout(timeOut, 4000);

// function interval(){
//     console.log(`I will be called forever`);
// }

// // setInterval(interval, 5000);


// setTimeout((fName, lName, zipCode) =>{
//     console.log(`My name is ${fName} ${lName} and I am from ${zipCode}`);
// },3000, 'Subramanian', 'Thayuman', 620009)


// let array = ['raja', 'mani'];

// const out = setTimeout((a,b) =>{
//     console.log(`Names = ${a} and ${b}`);
// },1000, ...array)

// const intervalOne = setInterval((a,b) =>{
//     console.log(`Names = ${a} and ${b}`);
// },1000, ...array)


// const myObj ={
//     name : 'Subramanian',
//     age : 20
// }

// setTimeout((a,b) =>{
//     console.log(`Name is ${a} and  Age is ${b}`);
// },1000, ...Object.values(myObj)) /// Passing keys of object using spread Object.

// if(array.includes('Raja')){
//     clearTimeout(out)
// }

// if(array.includes('raja')){
//     clearInterval(intervalOne)
// }

// let count = 0;
// const a = setInterval(() =>{
//     console.log(`The Count is ${++count}`);   
//     if(count === 5){
//         clearInterval(a)
//     }
// }, 1000) // this is the best example for clear Interval.
//when count reaches 5 it will print and exit the Interval.

const boardPassengers = (n, wait) => {
    const peoplePerGroup =  n/3;

    setTimeout(() => {
        console.log(`We are Boarding ${n} Passengers.`);
        console.log(`There are 3 groups with ${peoplePerGroup} passengers in each group`);
    },wait*1000)
    console.log(`Starting Onboarding of the passengers in ${wait} Hours`);
}
boardPassengers(180, 3)
