

//Exercise 4

const person = {
    name: '',
    age: 0,
    greeting: function() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    },
    salute: function() {
        console.log(`Good morning!, and in case I don't see you, good afternoon, good evening and good night!`);
    }
};
const student = Object.create(person);
student.major = '';
student.greeting = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

const professor = Object.create(person);
professor.department = '';
professor.greeting = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

const student1 = Object.create(student);
student1.name = 'Alice';
student1.age = 20;
student1.major = 'Computer Science';

const professor1 = Object.create(professor);
professor1.name = 'Dr. Smith';
professor1.age = 45;
professor1.department = 'Physics';

student1.greeting(); // Output: Hey, my name is Alice and I am studying Computer Science.
student1.salute();   // Output: Good morning!, and in case I don't see you, good afternoon, good evening and good night!

professor1.greeting(); // Output: Good day, my name is Dr. Smith and I am in the Physics department.
professor1.salute();   // Output: Good morning!, and in case I don't see you, good afternoon, good evening and good night!

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function() {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function() {
    console.log(`Good morning!, and in case I don't see you, good afternoon, good evening and good night!`);
};

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.greeting = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};


const student2 = new Student('Bob', 22, 'Mathematics');
const professor2 = new Professor('Dr. Jones', 50, 'Biology');

student2.greeting(); // Output: Hey, my name is Bob and I am studying Mathematics.
student2.salute();   // Output: Good morning!, and in case I don't see you, good afternoon, good evening and good night!

professor2.greeting(); // Output: Good day, my name is Dr. Jones and I am in the Biology department.
professor2.salute();   // Output: Good morning!, and in case I don't see you, good afternoon, good evening and good night!
