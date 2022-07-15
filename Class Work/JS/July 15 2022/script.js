//15.07.2022

console.log('Hi ! Mani');

const PersonProto = {
    calculateAge(){
        console.log(`My name is ${this.fName} ${this.lName} and current age is ${2022 - this.bYear}`);
    },
    initialize(fName, lName, bYear){
        this.fName = fName;
        this.lName = lName;
        this.bYear = bYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.initialize('Bruce', 'Banner', 1987);
steven.calculateAge();

const StudentProto = Object.create(PersonProto);

StudentProto.initial = function(fName, lName, bYear, course){
    PersonProto.initialize.call(StudentProto, fName, lName, bYear, course);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`The Student name is ${this.fName} ${this.lName} and is pursuing course as ${this.course}`);
}

const raja = Object.create(StudentProto);
raja.initial('Raja', 'Rambo', 1995, 'B.C.A');

raja.introduce();
raja.calculateAge();