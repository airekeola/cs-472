


//Exercise 3

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

function Teacher(name) {
    Person.call(this, name);
}

// Inherit from Person
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

// Add the teach method
Teacher.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
}

const teacher = new Teacher('John');
teacher.teach('Mathematics');


function createPerson(name) {
    return {
        name: name,
        getName: function() {
            return this.name;
        }
    };
}

function createTeacher(name) {
    let teacher = Object.create(createPerson(name));
    teacher.teach = function(subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    };
    return teacher;
}

const teacher2 = createTeacher('Jane');
teacher2.teach('Science'); // Output: Jane is now teaching Science


// Example 3 usage:
console.log("EX.3")
console.log(teacher.getName()); // Output: John
