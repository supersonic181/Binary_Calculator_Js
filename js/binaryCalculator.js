const display = document.querySelector('#res');
const zero = document.querySelector('#btn0');
const one = document.querySelector('#btn1');
const clear = document.querySelector('#btnClr');
const add = document.querySelector('#btnSum');
const sub = document.querySelector('#btnSub');
const mul = document.querySelector('#btnMul');
const div = document.querySelector('#btnDiv');
const eql = document.querySelector('#btnEql');

let currentBit = 0;
let fstHalf = 0;
let sndHalf = 0;
let ans = 0;

clear.onclick = function() {display.innerHTML = '';}

zero.onclick = function() {
    currentBit = 0;
    display.innerHTML += currentBit;
    }

one.onclick = function() {
    currentBit = 1;
    display.innerHTML += currentBit; 
    }

add.onclick = function() {
    fstHalf = parseInt(display.innerHTML,2);
    currentBit = "+";
    display.innerHTML += currentBit;
}

sub.onclick = function() {
    fstHalf = parseInt(display.innerHTML,2);
    currentBit = "-";
    display.innerHTML += currentBit;
}

mul.onclick = function() {
    fstHalf = parseInt(display.innerHTML,2);
    currentBit = "*";
    display.innerHTML += currentBit;
}

div.onclick = function() {
    fstHalf = parseInt(display.innerHTML,2);
    currentBit = "/";
    display.innerHTML += currentBit;
}

eql.onclick = function() {
    let re = /([01]+)([+\-\*/])([01]+)/
    let array = display.innerHTML.match(re);
    fstHalf = parseInt(array[1],2);
    sndHalf = parseInt(array[3],2);
    const operation = array[2];
    switch(operation){
        case '+':
            ans = fstHalf + sndHalf;
            break;
        case '-':
            ans = fstHalf - sndHalf;
            break;
        case '*':
            ans = fstHalf * sndHalf;
            break;
        case '/':
            ans = fstHalf / sndHalf;
            break;
        default:
            throw new Error("Not Doable");
    }
    display.innerHTML = ans.toString(2);
}