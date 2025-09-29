// 1- 
function greetUser(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greetUser());         
console.log(greetUser("Ahmed"));  

// 2- 
function calculateTotal(price, taxRate = 0.1) {
  return price + price * taxRate;
}
console.log(calculateTotal(100));       
console.log(calculateTotal(100, 0.2));  

// 3- 
function createUser(username, role = "user") {
  return { username, role };
}
console.log(createUser("Ali")); 
console.log(createUser("Sara", "admin"));

// 4-
function multiplyAll(...numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
}
console.log(multiplyAll(2, 3, 4)); 

// 5- 
function multiplyFirstBySum(first, ...rest) {
  return first * rest.reduce((acc, num) => acc + num, 0);
}
console.log(multiplyFirstBySum(2, 3, 4, 5)); 

// 6- 
function collectStrings(...strings) {
  return strings;
}
console.log(collectStrings("apple", "banana", "cherry"));

// 7- 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

// 8- 
const copyArr = [...arr1];
console.log(copyArr);

// 9- 
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// 10- 
const user = { name: "Ali", age: 25 };
const updatedUser = { ...user, age: 26 };
console.log(updatedUser);

// 11- 
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first, second); // 10 20

// 12- 
const [head, ...tail] = numbers;
console.log(head); 
console.log(tail); 

// 13- 
const person = { name: "Omar", age: 30, city: "Cairo" };
const { name, age } = person;
console.log(name, age);

// 14- 
const { name: fullName, age: years } = person;
console.log(fullName, years);

// 15- 
function displayUser({ username, role }) {
  return `Username: ${username}, Role: ${role}`;
}
console.log(displayUser({ username: "Nora", role: "admin" }));
