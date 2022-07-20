// Question 1:
//     Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const FirstPrototype = {
    getDetails(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    },
}
FirstPrototype.details = function(){
    console.log(`The person name is ${this.fName} ${this.lName} and the person age is ${this.age}`);
}

const firstObj = Object.create(FirstPrototype);
firstObj.getDetails('Subramanian', 'Thayuman', 22);
firstObj.details();

const secondObj = Object.create(FirstPrototype);
firstObj.getDetails('Bruce', 'Banner', 42);
firstObj.details();


// Question 2:
// Write code to explain prototype chaining

const MainPrototype = {
    gettingDetails(fName, lName, points){
        this.fName = fName;
        this.lName = lName;
        this.points = points;
    },
    displayDetails(){
        console.log(`The name of the person is ${this.fName} ${this.lName} and the person  point is ${this.points}`);
    },
}

const firstPerson = Object.create(MainPrototype);
firstPerson.gettingDetails('Harry', 'Potter', 56);
firstPerson.displayDetails();

const addedDetails = Object.create(MainPrototype);

addedDetails.addedPoints = function(fName, lName, points, totalPoints){
    MainPrototype.gettingDetails.call(addedDetails, fName, lName, points, totalPoints);
    this.totalPoints = totalPoints;
}

addedDetails.display = function(){
    console.log(`The ,name of the person is ${this.fName} ${this.lName} and the person  got point ${this.points} for swimming and total point is ${this.totalPoints}`);
}

const iyyappan = Object.create(addedDetails);
iyyappan.addedPoints('Iyyappan', 'Krishnamoorthi', 48, 198);
iyyappan.display();

const thayuman = Object.create(addedDetails);
thayuman.addedPoints('Thayuman', 'Subramanian', 55, 210);
thayuman.display();

// Question 3:
// Add a method to calculate sum of all elements in Array in array's prototype, use that method to calculate sum for multiple arrays.

MainPrototype.calculateTotalPoints =function(arrayOfPoints){
    let sum = 0;
    for(let i in arrayOfPoints){
        sum+= arrayOfPoints[i];
    }
    console.log(`He / She earned total of ${sum}.`);

}

let ajayPoints = [49, 59, 83, 39, 88];

MainPrototype.calculateTotalPoints(ajayPoints);

let divagarPoints = [95, 90, 88, 68, 45];

MainPrototype.calculateTotalPoints(divagarPoints);

// Question 4:
// Write a JavaScript function to retrieve all the names of object's own and inherited properties.


const firstProperty = {
    name: 'Mani',
    age : 22
}
const secondProperty = {
    yearOfBirth : 2000
}

secondProperty.__proto__ = firstProperty;

function inheritedPropertyNames(){
    for(let i  in secondProperty){
        console.log(i);
    }
}

inheritedPropertyNames();