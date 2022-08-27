//06.07.2022

//Maps are collection of keys and value pairs.
//it preserves the order of insertion properties.
//It also preserves the data type or properties or keys. i.e. can key have any data type.
//The data type of keys will not change.

// 1. Inserting arrays as key and value pairs to Map

const mapOne = new Map([
    ['fName', 'Subramanian'],
    ['lName', 'Thayuman'],
    [true, '18+'],
    [22, 'Age'],
    []
])
console.log(mapOne);

//Method 2.

const mapTwo = new Map();
mapTwo.set('Mobile','Android');
mapTwo.set('Car','Lamborghini');
mapTwo.set(11000, 'Price');
mapTwo.set('Age', 22);

console.log(mapTwo);
console.log("---------------------1-------------------");

console.log(mapTwo.get('Car')); // used to get access the value using key.
console.log(mapTwo.get(11000)); // Price 
console.log("---------------------2-------------------");

console.log(mapTwo.has('Mobile')); //true
console.log("---------------------3-------------------");

mapTwo.delete(11000);
console.log(mapTwo);
console.log("---------------------4-------------------");

// mapTwo.clear(); //it will Clear entire map keys and values
console.log(mapTwo.size); //size of a Map

console.log(typeof mapTwo); //Object

console.log('--------------------5--------------');

for(const keys of mapTwo.keys()){
    console.log(keys);
}
console.log("---------------------6-------------------");

for(const values of mapTwo.values()){
    console.log(values);
}
console.log("---------------------7-------------------");

for(const [keys,values] of mapTwo.entries()){
    console.log(keys,values);
}
console.log("---------------------8-------------------");

// foreach() = The forEach() method calls a function and iterates over the elements of an array. The forEach() method can also be used on Maps and Sets.

mapTwo.forEach(function(value,key){//if two params then first is always value and then key
    console.log(key,value);
})
console.log("---------------------9-------------------");

mapTwo.forEach(function(value){//if only one param then it is always value
    console.log(value);
})
console.log("---------------------10-------------------");

mapTwo.forEach(function(key){//if only one param then it is always value
    console.log(key);
})