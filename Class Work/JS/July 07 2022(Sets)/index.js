//07.07.2022

//Sets

//Sets are collection of UNIQUE values.
//All the values can only occur only once. That means no duplicate allowed.
//It can hold values of data type.
//we can't access key and value pairs.
//Can't access using index .

//We can define in Two Methods.

//Method 1

const setOne = new Set(['Apple', 'Orange', 'Mango'])
console.log(setOne);

//Method 2

const setTwo = new Set();
setTwo.add('Samsung');
setTwo.add('Redmi');
setTwo.add('Lenovo');

console.log(setTwo);
console.log("---------------------1-------------------");

console.log(setTwo[2]); //UNDEFINED

console.log("---------------------2-------------------");

console.log(setTwo.has('Mobile')); //false
console.log("---------------------3-------------------");

setTwo.delete('Redmi'); //deletes redmi
console.log(setTwo);
console.log("---------------------4-------------------");

// setTwo.clear(); //it will Clear  all entires
console.log(setTwo.size); //size of a Map

console.log(typeof(setTwo)); //Object

console.log('--------------------5--------------');

for(const keys of setTwo.keys()){
    console.log(keys); //return values
}
console.log("---------------------6-------------------");

for(const values of setTwo.values()){
    console.log(values);//return values
}
console.log("---------------------7-------------------");

for(const [keys,values] of setTwo.entries()){
    console.log(keys,values);//return values 2 times
}
console.log("---------------------8-------------------");

setTwo.forEach(function(value,key){
    console.log(key,value); //return values 2 times
})
console.log("---------------------9-------------------");

setTwo.forEach(function(value){
    console.log(value); //return values
})
console.log("---------------------10-------------------");

setTwo.forEach(function(key){
    console.log(key); //return values
})