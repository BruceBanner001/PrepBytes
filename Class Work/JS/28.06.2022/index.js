//28.06.2022

//DESCION MAKING

//If-Else Statement

// If is used to handle only one case.

//if-else is used to handle two cases.

let age = 15;

if(age >= 18){
    console.log('You are Eligible for voting');
}
else{
    console.log('You are not Eligible for voting');
}

//We can replace if statement with Ternary Operator

age = 20;

age >= 18 ? console.log('You are Eligible for voting') : console.log('You are not Eligible for voting');

//if, else if, else are used to handle *** cases.

if(age >=18 && age <= 40){
    console.log('Your age is between 18 - 40');
}
else if(age >40 && age <=60){
    console.log('Your age is between 41 - 60');
}
else if(age >60){
    console.log('Your age is more than 60');
}
else{
    console.log('Your age is between 1 - 18');
}


//student scores > 90 => grade A
//student scores 80 - 90 => grade B
//student scores 70 - 80 => grade C
//student scores marks < 70 => grade D

let marks = 77;

if(marks > 90){
    console.log('Grade A');
}
else if(marks >=70 && marks <80){
    console.log('Grade C');
}
else if(marks >=80 && marks <=90){
    console.log("Grade B");
}
else{
    console.log('Grade D');
}


//Switch is used to handle more than 4 cases. Even we can use two cases also.

let value =8;

switch (value) {
    case 1:
        console.log('Case 1');
        break;
     case 2:
        console.log('Case 2');
        break;
     case 3:
        console.log('Case 3');
        break;
    case 4:
        console.log('Case 4');
    break;
    case 5:
        console.log('Case 5');
        break;
    case 6:
        console.log('Case 6');
        break;
    default:
        console.log('Case 7');
        break;
}

//LOOPS

//Loops keeps on running until the condition statisfied.


//for loop

for(let i = 0; i < 5; i++){
    console.log('Number', i);
}

console.log('break');

for( let i =1; i <=10; i++){
    console.log(`2 * ${i} = ${2*i}`);
}
