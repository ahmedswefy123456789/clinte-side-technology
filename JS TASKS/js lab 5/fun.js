//q1--
// reason: it return A then B :becouse hoisting that can not access b before intialization becuase b is a variable but a is not  variable can access any where 
//b(function expression)a(function statement)
console.log(a());
var b = function(){ return 'B'; };
function a(){ return 'A'; }
console.log(b())
//-------------------------------------------
//q2
var add=function sum(a,b){
    return a+b
};
console.log(add(3,4));
//-----------------------------------
//q3
var factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); 
};

console.log(factorial(5));
//-----------------------------------
//q4
function showInfo() {
    console.log('arguments.length:', arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        console.log('argument', i, ':', arguments[i]);
    }
}

showInfo();
showInfo(1, 2);
showInfo('a', 2, true, null, [5]);

//---------------------------
// q5
function mutate(x, y) {
    console.log('Before mutation:', arguments[0], arguments[1]);
    x = 100;
    y.name = 'changed';
    console.log('After mutation:', arguments[0], arguments[1]);
    // Explanation:
    // Changing x (a primitive) does NOT affect arguments[0].
    // Changing y (an object) DOES affect arguments[1] because both reference the same object.
}

let num = 5;
let obj = { name: 'original' };
mutate(num, obj);
// q6
function sumAll() {
    let total = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            total += arguments[i];
        }
    }
    return total;
}
console.log(sumAll(2, 5, 3)); 
console.log(sumAll());        

// q7
function sumAllReduce() {
    return [].reduce.call(arguments, function(acc, val) {
        return typeof val === 'number' ? acc + val : acc;
    }, 0);
}
console.log(sumAllReduce(2, 5, 3)); 
console.log(sumAllReduce()); 
function describeValue() {
    if (arguments.length === 0) return 'none';
    if (arguments.length === 1) return 'one:' + arguments[0];
    if (arguments.length === 2) return 'two:' + arguments[0] + ',' + arguments[1];
    return 'too many';
}
console.log(describeValue());
console.log(describeValue(42));
console.log(describeValue('a', 'b'));
console.log(describeValue(1, 2, 3));

// q9
let funcs = [
    function(n) { return n + 2; },
    function(n) { return n * 3; },
    function(n) { return n - 5; }
];
let start = 10;
for (var i = 0; i < funcs.length; i++) {
    start = funcs[i](start);
}
console.log(start); 
// q11. once: runs fn only first time, returns its return value
function once(fn) {
    let called = false, result;
    return function() {
        if (!called) {
            called = true;
            result = fn.apply(this, arguments);
            return result;
        }
        
    };
}

function testFn() {
    console.log('Function called');
    return 'result!';
}
const runOnce = once(testFn);
console.log(runOnce()); 
console.log(runOnce()); 
// q12
function onceMemo(fn) {
    let called = false, result;
    return function() {
        if (!called) {
            called = true;
            result = fn.apply(this, arguments);
        }
        return result;
    };
}
const runOnceMemo = onceMemo(testFn);
console.log(runOnceMemo()); 
console.log(runOnceMemo());

// q14
function makeAdder(start) {
    let total = start;
    return function(n) {
        total += n;
        return total;
    };
}

const adder1 = makeAdder(0);
const adder2 = makeAdder(100);
console.log(adder1(5));   
console.log(adder1(10));  
console.log(adder2(1));   
console.log(adder2(9));
// q17
let user = {
    name: 'Alice',
    sayHi: function() {
        console.log('Hi ' + this.name);
    }
};

user.sayHi(); // Logs: Hi Alice

var f = user.sayHi;
f(); // Logs: Hi undefined
// Explanation:
// When calling user.sayHi(), 'this' refers to the user object, so this.name is 'Alice'.
// When calling f(), 'this' is not bound to user, so this.name is undefined.
// q18
user.sayHi.call({ name: 'Sara' });   
user.sayHi.apply({ name: 'Sara' });
// q19
let greeter = {
    greet: function(greeting, sign) {
        console.log(greeting + ' ' + this.name + sign);
    }
};

greeter.greet.apply({ name: 'Ali' }, ['Hello', '!']);
//q20
const greetLara = greeter.greet.bind({ name: 'Lara' });
greetLara('Hi', '!');        
greetLara('Welcome', ' :)');

// q21
function sayHello(obj, sign) {
    greeter.greet.call(obj, 'Hello', sign);
}
sayHello({ name: 'Bob' }, '!');
sayHello({ name: 'Mona' }, '*');
sayHello({ name: 'Sam' }, '!!');
sayHello({ name: 'Lily' }, '<#');

// q22
function logReverse() {
    var arr = [].slice.call(arguments);
    var reversed = arr.slice().reverse();
    console.log('Reversed:', reversed);
    console.log('Original:', arr);
}
logReverse(1, 2, 3, 4);
// q23
let arr = [5, 2, 11, 7];
let max1 = Math.max.apply(null, arr);
console.log('Max (no loop):', max1);

let max2 = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max2) max2 = arr[i];
}
console.log('Max (with loop):', max2);
// q24
console.log(Math.max.call(null, 3, 8, 2)); 
console.log(Math.max.apply(null, [3, 8, 2]));
// Explanation: call requires individual arguments, apply accepts an array.

// q25
let name = 'Ali', age = 20;
console.log(`User: ${name} Age: ${age + 1}`);

// q26
let title = 'Welcome', body = 'This is the body.';
console.log(`Title: ${title}
Body: ${body}`);

console.log('Title: ' + title + '\nBody: ' + body);
// q27
if (true) {
    var i = 1;
    let j = 2;
    console.log('Inside:', i, j); 
}
console.log('Outside:', i);

// q28
try {
    console.log(x); 
    let x = 5;
} catch (e) {
    console.log('Error:', e.message);
}

// q29
const neW = [1, 2, 3];
neW.push(4); 
console.log(neW);
// q30
const squareFull = (n) => { return n * n; };
const squareConcise = n => n * n;
console.log([1, 2, 3].map(n => n * n));

// q31
const timer = {
    count: 0,
    startClassic: function() {
        this.count = 0;
        const self = this;
        const id = setInterval(function() {
            self.count++;
            console.log('Classic:', self.count);
            if (self.count >= 3) clearInterval(id);
        }, 500);
    },
    startArrow: function() {
        this.count = 0;
        const id = setInterval(() => {
            this.count++;
            console.log('Arrow:', this.count);
            if (this.count >= 3) clearInterval(id);
        }, 500);
    }
};

// q32
const getObj = () => ({ v: 10 });
console.log(getObj());

// q33
const badArrow = {
    name: 'Ali',
    sayHi: () => console.log('Hi ' + this.name)
};
badArrow.sayHi();

// q34
const greet = name => `Hi ${name}!`;
console.log(greet('ya habeby :)'));

// q35
const add2 = n => n + 2;
const times3 = n => n * 3;
const minus1 = n => n - 1;
function runPipeline(n, fnsArray) {
    for (let fn of fnsArray) {
        n = fn(n);
    }
    return n;
}
console.log(runPipeline(5, [add2, times3, minus1]));

// q36
var obJ = { n: 1, inc: function(){ this.n++; return this.n; } };
var inc = obJ.inc;
console.log(obJ.inc()); 
console.log(inc());     
// Explanation:
// obj.inc() calls inc with 'this' as obj, so obj.n increments from 1 to 2.
// inc() is called without an object, so 'this' is global (window in non-strict), so window.n is undefined, ++undefined is NaN.

// q37
let counters = [];
for (let i = 0; i < 1000; i++) {
    counters.push((function() {
        let count = 0;
        return function() { return ++count; };
    })());
}

// q38
function safeFirst() {
    if (arguments.length === 0) return undefined;
    return [].slice.call(arguments);
}
console.log(safeFirst());         
console.log(safeFirst(1, 2, 3));

// q39
function factory(namesArray) {
    let obj = {};
    namesArray.forEach(function(name) {
        let count = 0;
        obj[name] = function() { return ++count; };
    });
    return obj;
}
var counters2 = factory(['a', 'b']);
console.log(counters2.a());
console.log(counters2.a()); 
console.log(counters2.b());

// q40
// Two things new/tricky today:
// 1. Using named function expressions for recursion without polluting global scope.
// 2. How arrow functions handle 'this' differently, especially in object methods and setInterval callbacks.
