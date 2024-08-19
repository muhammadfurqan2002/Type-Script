"use strict";
// chapter-2
// basic data types and union type as well RegExp type
// let Myname="furqan";
// let Myname:string="furqan";
let Myname;
Myname = "furqan";
let age;
let isLoading;
let songs = "furqan";
songs = 34.34;
let queries; // this is uniion type
// queries=true;
const sum = (num1, num2) => {
    return num1 + num2;
};
let postId; //use when we are calling api and product id can be string or integer
let isActive; // it can be 0 or 1 and as well true or false 
let re = /\w+/g; //  regular expression type
// -------------------chapter-3-------------------------------
let stringArr = ['A', 'B', 'C'];
let guitars = ['start', 5454, "furqan"];
let mixData = ['Toyita', 5454, true];
// stringArr[0]=545 //error 
stringArr[0] = "Nothing";
// stringArr.push(45) error
guitars[0] = 3453;
guitars.unshift('good moring');
// guitars.unshift(true) error
// reassignment of arrays
// stringArr=guitars error
guitars = stringArr;
mixData = guitars;
let test = [];
let bands = [];
bands.push('Vans Toyota');
// Tuple
let myTuple = ['furqan', 21, true];
let mixed = ['butt', 45, false];
mixed = myTuple;
// myTuple=mixed error 
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const objExample = {
    name: "furqan",
    age: 21
};
let evh = {
    name: 'Furqan',
    active: false,
    albums: [3434, 56556, "OU%^&"]
};
let JP = {
    name: 'Nothing',
    active: false,
    albums: ['3434', '56556', "OU%^&"]
};
// evh=JP
// const greetGuitarist=(guitarist:Guitarist)=>{
//     return `Hello ${guitarist.name}`
// }
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return "Some data is undefine";
};
console.log(greetGuitarist(JP));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["F"] = 2] = "F";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["C"] = 4] = "C";
    Grade[Grade["B"] = 5] = "B";
    Grade[Grade["A"] = 6] = "A";
})(Grade || (Grade = {}));
console.log(Grade.F);
