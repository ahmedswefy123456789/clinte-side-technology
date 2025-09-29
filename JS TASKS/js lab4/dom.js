



// q1
var t=document.getElementsByTagName("div")[0]
console.log(t)
// q2 ,Q7
var y=document.getElementById("my-p")
y.innerText="HELLO DOM"
y.innerText+=" - UPDATED"
console.log(y)
// q3
e=document.querySelector(".target-div")
console.log(e)
// q4
r=document.querySelectorAll("div")
console.log(r.length)
// q5
w=document.getElementsByName("user-email")[0].value="user@test.com"
// q6
q=document.querySelector("input[type=text]")
if(q &&!q.hasAttribute("name")){
    q.setAttribute("name", "user-name");
}

// Q8
// Image slider logic
let currentIndex = 0;
let images = document.querySelectorAll('.sliders img');
let intervalId = null;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function next() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function start() {
    if (!intervalId) {
        intervalId = setInterval(next, 2000);
    }
}

function stop() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}


showImage(currentIndex);
// q9
q=document.querySelector("input[type=text]")
if(q){
    q.setAttribute("placeholder", "Type your full name");
}
// q10
i=document.querySelector("input[type=email]");
if(i){
    console.log('Has required attribute:', i.hasAttribute('required'));
    if(!i.hasAttribute("required")){
        i.setAttribute("required",1);
    }
}

// q11
function getSelectedValue(selectId) {
    var select = document.getElementById(selectId);
    if (select && select.tagName === 'SELECT') {
        return select.value;
    }
    return null;
}
// q12
function logSelectOptions(selectId) {
    var select = document.getElementById(selectId);
    if (select && select.tagName === 'SELECT') {
        for (var i = 0; i < select.options.length; i++) {
            var option = select.options[i];
            console.log('Text:', option.text, 'Value:', option.value);
        }
    }
}

// q13
function selectOptionEG(selectId) {
    var select = document.getElementById(selectId);
    if (select && select.tagName === 'SELECT') {
        select.value = "EG";
    }
}

// q14
function selectByText(selectId, text) {
    var select = document.getElementById(selectId);
    if (select && select.tagName === 'SELECT') {
        for (var i = 0; i < select.options.length; i++) {
            if (select.options[i].text === text) {
                select.selectedIndex = i;
                break;
            }
        }
    }
}

// q15
var div2 = document.getElementById('div-2');
if (div2) {
    div2.innerHTML = '<p><b>Bold Text</b></p>';
    //q16
    div2.classList.add('class-a', 'class-b');
    div2.classList.remove('class-b');
    //--q17
    div2.classList.toggle('hidden');
    div2.classList.toggle('hidden');
    
}

// q18
function insertAfter(refNode, newNode) {
    if (refNode && refNode.parentNode) {
        if (refNode.nextSibling) {
            refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
        } else {
            refNode.parentNode.appendChild(newNode);
        }
    }
}

// q19
var dynamicDiv = document.createElement('div');
dynamicDiv.textContent = 'Dynamic Box';
dynamicDiv.style.background = 'yellow';
dynamicDiv.style.padding = '10px';
dynamicDiv.style.marginTop = '10px';
if (div2) {
    div2.appendChild(dynamicDiv);
}

// q20
var newP = document.createElement('p');
newP.textContent = 'Inserted before first child';
if (div2 && div2.firstChild) {
    div2.insertBefore(newP, div2.firstChild);
}

// q21
if (div2) {
    div2.insertAdjacentHTML('afterend', '<span>AFTER END</span>');
}


// q22
var form = document.querySelector('form');
if (form) {
    form.onsubmit = function(e) {
        e.preventDefault();
        var textVal = document.querySelector('input[type="text"]')?.value;
        var emailVal = document.querySelector('input[type="email"]')?.value;
        var selectVal = document.querySelector('select')?.value;
        console.log('Text:', textVal);
        console.log('Email:', emailVal);
        console.log('Select:', selectVal);
    };
}

// q23
var textInput = document.querySelector('input[type="text"]');
if (textInput) {
    textInput.addEventListener('input', function() {
        console.log('Text input length:', this.value.length);
    });
}
// q24
function validateEmailSimple(value) {
    return value.includes('@') && value.includes('.');
}

// q25
var tempElem = document.createElement('div');
tempElem.textContent = 'Temporary Element';
if (div2) {
    div2.appendChild(tempElem);
    div2.removeChild(tempElem);
}
// q26
var wrapper = document.getElementById('wrapper');
var newElem = document.createElement('div');
newElem.textContent = 'Appended to wrapper';
if (wrapper) {
    wrapper.appendChild(newElem);
}

// q27
function highlightInputs(form) {
    if (form) {
        var inputs = form.querySelectorAll('input[type="text"], input[type="email"]');
        inputs.forEach(function(input) {
            input.style.border = '2px solid green';
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    highlightInputs(form);
});

// q28
function buildCard(title, content) {
    var card = document.createElement('div');
    card.className = 'card';
    var h3 = document.createElement('h3');
    h3.textContent = title;
    var p = document.createElement('p');
    p.textContent = content;
    card.appendChild(h3);
    card.appendChild(p);
    return card;
}

document.body.appendChild(buildCard('Card 1', 'This is the first card.'));
document.body.appendChild(buildCard('Card 2', 'This is the second card.'));
//q20
document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('card')) {
        console.log('Card clicked:', e.target.querySelector('h3')?.textContent);
    }
});

/*
// q30
Reflection:
The two most challenging tasks were:
1. Building the image slider with automatic and manual controls, as it required careful state management and event handling to ensure smooth transitions and button interactions.
2. Implementing robust DOM manipulations (insertBefore, insertAfter, insertAdjacentHTML, delegated events), since these required precise placement and understanding of the DOM tree to avoid unexpected results or errors.

*/


// q31
var ul = document.createElement('ul');
for (var i = 1; i <= 10; i++) {
    var li = document.createElement('li');
    li.textContent = 'Item ' + i;
    li.className = (i % 2 === 0) ? 'even' : 'odd';
    ul.appendChild(li);
}
document.body.appendChild(ul);

