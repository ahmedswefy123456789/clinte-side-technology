
function Person(name, age) {
  this.name = name;
  this.age = age;
}


Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};


function Student(name, age, grade) {

  Person.call(this, name, age);
  this.grade = grade;
}


Student.prototype = Object.create(Person.prototype);


Student.prototype.constructor = Student;


Student.prototype.showGrade = function() {
  console.log(`${this.name} is in grade ${this.grade}.`);
};


const person1 = new Person("Ali", 30);
person1.sayHello();

const student1 = new Student("Omar", 20, "A");
student1.sayHello(); 
student1.showGrade(); 