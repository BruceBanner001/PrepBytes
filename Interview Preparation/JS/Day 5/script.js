//Day 5(05.08.2022)
// Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button ?

const changeH1 = document.getElementsByTagName('h1');

document.getElementById('change').onclick = function () {
    changeH1[0].innerText = "MERN stack";
}
// Write code to get 1st H1 element from a webpage using DOM

console.log(changeH1[0].innerText);

// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

const clock = document.createElement('div');
clock.id = 'newClock';
const body = document.querySelector('body');
body.insertBefore(clock, body.children[4])
setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let amOrPm;
    if (hour > 12) {
        hour = hour - 12;
        amOrPm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        amOrPm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
    document.getElementById('newClock').innerText = `${hour}:${mins}:${secs}    ${amOrPm}`
}, 1000)


// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
document.getElementById('changeText').onclick = () => {
    document.getElementById('hello').innerText = "Welcome to Elevation Academy";
}

// Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

$('#hide').click(function () {
    $('#helloWorld').hide();
})
$('#show').click(function () {
    $('#helloWorld').show();
})

// Given an array of 0's and 1's find out number of 0's

let array = [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0];
let num = 0;
array.filter(element => element === 0 ? num++ : num)
console.log(num);


// Given an array find out total no. of odd and even nos.

let arrayOfNumbers = [12, 10, 11, 54, 44, 32, 10, 4, 3, 7, 51, 79];
let odd = 0;
let even = 0;
arrayOfNumbers.filter(element => element % 2 === 0 ? even++ : odd++);
console.log(`Count of Odd = ${odd} and Count of Even = ${even}`);
// Given a string find out number of vowels ?

let string = 'subramanian';
let vowels = 'aeiou';
let count = 0;
for (let i in string) {
    for (let j in vowels) {
        if (string[i].toLowerCase() === vowels[j]) {
            count++;
        }
    }
}
console.log(count);


// Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same


function Students(name, marks) {
    this.name = name;
    this.marks = marks;
}
const student1 = new Students('Mani', [50, 90, 100, 87, 87]);
const student2 = new Students('Bruce', [50, 90, 100, 87, 87]);

function check(){
    if(JSON.stringify(student1.marks) === JSON.stringify(student2.marks))
        return 'Same';
        return 'Not Same'
}
// console.log(check());

function check1(){
    if(student1.marks.length !== student2.marks.length){
        return 'Not Same';
    }
    else{
        for(let i in student1.marks){
            if(student1.marks[i] != student2.marks[i]){
                return 'Not Same';
            }
        }
        return 'Same';
    }
}
console.log(check1());