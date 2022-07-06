//05.07.2022

//Object -  Objects are collection of properties and methods.

//We can define objects in 2 ways.
//The order of entry of properties and methods aren't preserved in Objects. 
//this means it will be automatically arranged in ascending order.

const mobile = {
    brand : 'OnePlus',
    camera : '32px',
    weight : 200,
    11 : 'Android Version',
    displayInfo: function(){
        console.log(`
        The mobile I am using is of brand ${mobile['brand']} which 
        has a camera of ${mobile.camera} and has a weight of ${mobile.weight} 
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

console.log('---------------------------');


// Unique Color Shirt in Array JS Handson


// function Unique_Shirts (arr,N) {
//   let counts = {};
//   for(i = 0; i < arr.length; i++){
//     if(counts[arr[i]]){
//       counts[arr[i]] += 1;
//     }
//     else{
//       counts[arr[i]] = 1;
//     }
//   }
//   return counts;
// }
// res = Unique_Shirts([3, 2, 4, 1, 2, 3], 6);
// console.log(res);

// one = Object.values(res);
// console.log(one);
// count = 0;
// for (j = 0; j < one.length; j++){
//   if(one[j] === 1){
//     count += 1;
//     }
// }
// console.log(count);


// let result = {};
//   let count = 0;

// function Unique_Shirts (arr,N) {
  
//   for(let i = 0; i < N; i++){
//     if(result[arr[i]]){
//       result[arr[i]] += 1;
//     }
//     else{
//       result[arr[i]] = 1;
//     }
//   }
//    resultValues = Object.values(result);
//   for(let j = 0; j < resultValues.length; j++){
//     if(resultValues[j] === 1){
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(Unique_Shirts([3, 2, 4, 1, 2, 2], 6));
// console.log(resultValues);
// console.log(result);

const Inc_Arr = (array,N) => 
{
  // let result = array.map(item => item + 1);
  // return result;
  for(let i = 0; i < N; i++){
    array[i] += 1;
  }
  return array;
};

console.log(Inc_Arr([1,2,3], 3));


function Birthday_Game(arr,D ,M) {
  let sum = 0;
  let count = 0;
  for(let i = 0 ; i < M; i++){
    sum +=arr[i];
  }
  if(sum === D){
    count++;
  }
  for(let i = M; i < arr.length; i++){
    sum += arr[i];
    sum -= arr[i-M];
    if(sum === D){
      count++;
    }
  }
  return count;
}

console.log(Birthday_Game([2, 2, 1, 3, 2], 4, 2));