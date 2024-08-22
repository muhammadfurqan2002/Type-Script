"use strict";
// Literal Types
let myName;
// myName="furqan butt"; error
let userName;
userName = 'Muhammad Furqan';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("heloo");
logMsg("Furqan");
logMsg("Hope you well");
let subtract = (a, b) => {
    return a - b;
};
let multiply = (a, b) => {
    return a * b;
};
logMsg(multiply(2, 2));
// optional paramters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const multAll = (a, b, c = 4) => {
    return a * b * c;
};
console.log(addAll(1, 2));
// Rest Parameters
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7));
// use of never type
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
// custom type card
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const NumberOrString = (value) => {
    if (typeof value === "string")
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError("This should never happen");
};
console.log(NumberOrString(78));
