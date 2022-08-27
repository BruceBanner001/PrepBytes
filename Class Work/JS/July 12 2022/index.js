//12.07.2022

function Student (fname, lname, gender, age){
    this.firstName = fname;
    this.lname = lname;
    this.gender = gender;
    this.age = age;
}

//Using ES2015
// class Student {
//     constructor(fname, lname, gender, age) {
//         this.firstName = fname;
//         this.lname = lname;
//         this.gender = gender;
//         this.age = age;
//     }
// }

const student1 = new Student('Subramanian', 'Thayuman', 'Male', 22);
const student2 = new Student('Bruce', 'Banner', 'Male', 30);

console.log(student1);
console.log(student2);
console.log(student1['firstName']);
console.log(student1.firstName);

let myObject = {
    name : 'Subramanian',
    gender : 'Male',
    age : 22,
    showInfo : function() {
        console.log(`Name of the person is ${this.name} whose gender is ${this.age} and age is ${this.age}`);
    }
}
console.log(myObject);
myObject.showInfo();

let secondObj = {
    name: 'Raja'
}
secondObj.__proto__ = myObject;
console.log(secondObj);
console.log(secondObj.name, myObject.gender, myObject.age);

// let array = [secondObj.name, myObject.gender, myObject.age];
// console.log(array);

let array = [1, 2, 3];

function add(){
    console.log('hi');
}
console.log(array.__proto__);
console.log(array.__proto__.__proto__);
console.log(array.__proto__.__proto__.__proto__);

console.log(array.__proto__ == Array.prototype);
console.log(array.__proto__.__proto__ == Object.prototype);
console.log(array.__proto__.__proto__.__proto__ == null);

//---------------------------------------------------------------
console.log(add.__proto__);
console.log(add.__proto__.__proto__);
console.log(add.__proto__.__proto__.__proto__);

console.log(add.__proto__ == Function.prototype);
console.log(add.__proto__.__proto__ == Object.prototype);
console.log(add.__proto__.__proto__.__proto__ == null);

//---------------------------------------------------------------
console.log(secondObj.__proto__);
console.log(secondObj.__proto__.__proto__);
console.log(secondObj.__proto__.__proto__.__proto__);

console.log(secondObj.__proto__ == myObject.prototype); //false
console.log(secondObj.__proto__.__proto__ == Object.prototype);
console.log(secondObj.__proto__.__proto__.__proto__ == null);

//---------------------------------------------------------------
console.log(myObject.__proto__);
console.log(myObject.__proto__.__proto__);

console.log(myObject.__proto__ == Object.prototype);
console.log(myObject.__proto__.__proto__ == null);


// //Call, Apply, Bind - They are used for function Borrowing.
console.log('-----------------Call---------------------------');

// let employee1 = {
//     name: "Ravi",
//     employeeCode: 1,
//     domain: "Technical",
//     displayInfo: function(){
//         console.log(this.name, this.employeeCode, this.domain);
//     }
// }

// employee1.displayInfo();

// let employee2 = {
//     name: "Arya",
//     employeeCode: 2,
//     domain: "Developer",
// }

// let employee3 = {
//     name: "Jaanvi",
//     employeeCode: 3,
//     domain: "HR",
// }

// employee1.displayInfo.call(employee2);
// employee1.displayInfo.call(employee3);

let employee1 = {
    name: "Ravi",
    employeeCode: 1,
    domain: "Technical",
    
}
let displayInfo = function(gender, age){ //function Expression
    console.log(this.name, this.employeeCode, this.domain, gender, age);
}
displayInfo();

let employee2 = {
    name: "Arya",
    employeeCode: 2,
    domain: "Developer",
}

let employee3 = {
    name: "Jaanvi",
    employeeCode: 3,
    domain: "HR",
}

displayInfo.call(employee1, 'Male', 22); //arguments are passed as comma separated.
displayInfo.call(employee2, 'Male', 24);
displayInfo.call(employee3, 'Female', 25);

//----------------------------------

// Apply
console.log('-----------------Apply---------------------------');
displayInfo.apply(employee1, ['Male', 29]); //arguments are passed as array separated.
displayInfo.apply(employee2, ['Male', 24]);
displayInfo.apply(employee3, ['Female', 25]);

// Bind
console.log('-----------------Bind---------------------------');

// let result1 = displayInfo.bind(employee1);
// result1('Male', 22);
displayInfo.bind(employee1)('Male', 22);

// let result2 = displayInfo.bind(employee2);
// result2('Male', 24);
displayInfo.bind(employee2)('Male', 24);

// let result3 = displayInfo.bind(employee3);
// result3('Female', 25);
displayInfo.bind(employee3)('Female', 25);

