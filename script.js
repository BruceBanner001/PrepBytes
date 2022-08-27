console.log('working');
// console.log(name);
let name = 'subramanian';
call();
function call(){
    console.log('Hello');
}

const obj = {
    name :'Subramanian',
    age : 22,
}
function bindFunction(){
    console.log(`${this.name} and ${this.age}`);
}
const newBind = bindFunction.bind(obj);

newBind();


function closure(){
    let value = 0;
    return function(){
        console.log(++value);
    }
}

let print = closure();
print();
print();


const printPromise = () =>{
    return new Promise((resolve,reject)=>{
        const id = [1,2,3,4,5];
        resolve(id);
        reject('Rejected');
    })
}
const getPromise = printPromise()
getPromise
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })


const callbackHell = () =>{
    setTimeout(() => {
        console.log('I am Printed');
        setTimeout(() => {
            console.log('I am Printed');
            setTimeout(() => {
                console.log('I am Printed');
                setTimeout(() => {
                    console.log('I am Printed');
                    setTimeout(() => {
                        console.log('I am Printed');
                    }, 5000);
                }, 4000);
            }, 3000);
        }, 2000);
    }, 1000);
}

callbackHell();

let array = [1,2,3,4,5];
let array1 = [7,8,9];
let array2 = array;
let array3 = [...array]
let finalArray = [...array, ...array1];
console.log(finalArray);