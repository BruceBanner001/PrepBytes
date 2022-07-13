//05.07.2022

//Object -  Objects are collection of properties and methods.

//We can define objects in 2 ways.
//The order of entry of properties and methods aren't preserved in Objects. 
//this means it will be automatically arranged in ascending order.
//Objects converts the keys data types into string even if it isn't of string type. Basically all keys are of 
// string type only.

const mobile = {
    brand : 'OnePlus',
    camera : '32px',
    weight : 200,
    11 : 'Android Version',
    displayInfo: function(){
        console.log(`
        The mobile I am using is of brand ${mobile['brand']} which 
        has a camera of ${this.camera} and has a weight of ${mobile.weight} 
        which supports ${mobile[11]}`);
    }
}
console.log(mobile);

//methods to access keys
console.log(mobile.brand); //object.propertyName
console.log(mobile['brand']);//object["propertyName"]

//Method to access the functions/methods of an Object.

mobile.displayInfo();

mobile.ram = '8gb'; //method to add property to an Object outside the Object.
console.log(mobile);

delete mobile.weight;  //delete a property from an Object.
console.log(mobile);

mobile.brand = 'Samsung'; // Modifying a property
console.log(mobile);

console.log(mobile.hasOwnProperty('weight')); //false
console.log(mobile.hasOwnProperty('camera')); //true

const keys = Object.keys(mobile);
console.log(keys);
// (5) ['11', 'brand', 'camera', 'displayInfo', 'ram']
// 0: "11"
// 1: "brand"
// 2: "camera"
// 3: "displayInfo"
// 4: "ram"

const values = Object.values(mobile);
console.log(values);
// (5) ['Android Version', 'Samsung', '32px', ƒ, '8gb']
// 0: "Android Version"
// 1: "Samsung"
// 2: "32px"
// 3: ƒ ()
// 4: "8gb"

for(const [keys, values] of Object.entries(mobile)){
    console.log(keys, values); // it will returns keys and values of mobile Object
}

// Method 2.Object Constructor.
function Mobile(brand, camera, ram){
    this.brand = brand;
    this.camera = camera;
    this.ram = ram;
}

const onePlus = new Mobile('OnePlus', '32px', '8gb');
const samsung = new Mobile('Samsung', '16px', '4gb');
const redmi = new Mobile();
console.log(onePlus);
console.log(samsung);
console.log(redmi); // values will be undefined

//06.07.2022


//this keyword

//I an object this refers to the name of the object.
//Alone(global space) this refers to the Global Object(Window Object) 
//In regular function, this also points to the Global Object(Window)
//Strict Mode -(use strict), this refers to undefined.
//use strict mode inside the function.
//when use strict mode window objects are restricted.

//Fat arrow function do not support hoisting.
//function supports hoisting.

age = 2; // This will be added to Window
console.log(age);
console.log(this); //This is the window object.

function add(){
  'use strict'
  console.log(this); //this window object will be undefined
  console.log('Hello'); // This will print
}
add();

// ------------------------------------------------------------

//spread Operator

let arr1 =[1,2,3,4,5,15];
let arr2 =[6,7,8,9,10];
let arr5 =[11,13,15];
console.log(arr1.concat(arr2)); //concat arr1 and arr2
//let arr3 = {...arr1,...arr2,...arr5}; //{0: 11, 1: 13, 2: 15, 3: 9, 4: 10, 5: 15}
let arr4 = [...arr1,...arr2,...arr5];// concat arr1 and arr2
console.log(arr4);

//-----------------------------------------------------------------
