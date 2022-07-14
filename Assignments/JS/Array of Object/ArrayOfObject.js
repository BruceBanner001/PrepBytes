console.log('--------');
let studentRecords = [  {name: 'John', id: 123, marks : 98 },
                        {name: 'Baba', id: 101, marks : 23 },
                        {name: 'yaga', id: 200, marks : 45 },
                        {name: 'Wick', id: 115, marks : 75 }  ] 


// Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']

let studentNames = [];
for(let i in studentRecords){
    studentNames.push(studentRecords[i].name.toUpperCase());
}
console.log(studentNames);

// Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

let studentDetails = [];
for(let i in studentRecords){
    if(studentRecords[i].marks > 50){
        studentDetails.push(studentRecords[i]);
    }
}
console.log(studentDetails);

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let studentId = [];
for(let i in studentRecords){
    if(studentRecords[i].marks > 50 && studentRecords[i].id > 120){
        studentId.push(studentRecords[i]);
    }
}
console.log(studentId);

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let totalMarks = 0;
for(let i in studentRecords){
    totalMarks += studentRecords[i].marks;
}
console.log(totalMarks);

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let studentName = [];
for(let i in studentRecords){
    if(studentRecords[i].marks > 50){
        studentName.push(studentRecords[i].name)
    }
}
console.log(studentName);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.

let totalMarks1 = 0;
for(let i in studentRecords){
    
    if(studentRecords[i].id > 120){
        totalMarks1 += studentRecords[i].marks;
    }
}
console.log(totalMarks1);

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let graceAdded = 0;
for(let i in studentRecords){
    if(studentRecords[i].marks < 50){
        graceAdded += studentRecords[i].marks + 15;
    }
}
console.log(graceAdded);

// Question 8: Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

class Students{
    constructor(name, class1, rollno){
        this.name = name;
        this.class = class1;
        this.rollno = rollno;
    }
}

const student1 = new Students('Divagar', 'BCA', 1);
const student2 = new Students('Iyyappan', 'BCA', 2);
const student3 = new Students('Naveen', 'BCA', 3);
const student4 = new Students('Mahendran', 'BCA', 4);
const student5 = new Students('Subramanian', 'BCA', 5);
const student6 = new Students('Surendra Kumar', 'BCA', 6);
let studentDetailsArray = [student1, student2, student3, student4, student5, student6];

console.log(studentDetailsArray);
