"use strict";
// type casting 
// convert to more or less sepcific 
let a = 'hellow';
let b = a; //less specific
let c = a; //more specific
console.log(a);
console.log(b);
console.log(c);
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return ' ' + a + b;
};
//  Be careful! TS sees no problem -but a string is returned
// let myVal:string=addOrConcat(2,2,'ad') as string;
// console.log(myVal)
// 10 as string  error 
10; //double catsing
// The DOM 
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
