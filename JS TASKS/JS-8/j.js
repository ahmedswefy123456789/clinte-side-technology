// q1
import { greetUser } from './utils.js';

console.log(greetUser("AHMED"));
// q2
function addTwo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("task one is proccessing")
            resolve("Result from Task One")
        },2000);
    });
}
addTwo().then((result)=>{
    console.log(result);
});
//q3
let mypromise=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("welcom back");
    },1000);
})
async function waitAndGreet(){
    console.log(await mypromise);
};

waitAndGreet();
//q4

async function fetchData(){
  try{
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log("Data:", "name is",data[1].name,"email is", data[1].email);
  }
  catch(error){
    console.error("Error:", error);
  }
}
fetchData();
// q5
async function getFirstThreeTitles() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    let titles = [];
    for (let i = 0; i < 3; i++) {
      titles.push(data[i].title);
    }
    return titles;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
getFirstThreeTitles().then(console.log);
// Q6
function timer(count) {
  return new Promise(resolve => {
    let i = 1;
    function next() {
      if (i > count) return resolve();
      setTimeout(() => {
        console.log(i);
        i++;
        next();
      }, 1000);
    }
    next();
  });
}
timer(3);

// Q7
function safeParseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Invalid JSON:', error.message);
    return null;
  }
}
console.log('Valid:', safeParseJSON('{"name": "Omar"}'));
console.log('Invalid:', safeParseJSON('{name: Omar}'));

// Q8
async function getCompletedTodosCount() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
    const todos = await response.json();
    const completedCount = todos.filter(todo => todo.completed).length;
    return completedCount;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return 0;
  }
}
getCompletedTodosCount().then(count => console.log('Completed todos:', count));

// Q9
import DataFetcher from './DataFetcher.js';
const fetcher = new DataFetcher();
fetcher.getUser(1).then(user => console.log('User:', user));