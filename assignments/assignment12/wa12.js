
const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt); 


const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);



function check() {
    console.log('test');
}

function minus() {
    if (outputInt > 0) {
    outputInt -=1;
    output.textContent = outputInt;    }
}

function submit() {
    alert('output.textContent');
}


function reset() {
   outputInt = 0;
    output.textContent = outputInt;
}


function plusRunner() {
    plus(outputInt);
}


function plus() {
    if (outputInt < 9999999999) {
    outputInt +=1;
    output.textContent = outputInt;
}
}

function random() {
    outputInt = randomNumber(0, 9999999999);
    return num;
}

function randomNumber(min, max) {
 const num = Math.floor(Math.random() = (max - min + 1)) - min;
 return num;
}



/*
const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/

