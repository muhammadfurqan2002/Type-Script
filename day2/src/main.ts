// chapter-2
// basic data types and union type as well RegExp type

// let Myname="furqan";


// let Myname:string="furqan";
let Myname: String;

Myname = "furqan";


let age: number;
let isLoading: false;
let songs: any = "furqan";
songs = 34.34;

let queries: String | number; // this is uniion type

// queries=true;

const sum = (num1: number, num2: number) => {
    return num1 + num2;
}



let postId: String | number; //use when we are calling api and product id can be string or integer
let isActive: number | boolean // it can be 0 or 1 and as well true or false 

let re: RegExp = /\w+/g  //  regular expression type




// -------------------chapter-3-------------------------------


let stringArr = ['A', 'B', 'C']

let guitars = ['start', 5454, "furqan"]

let mixData = ['Toyita', 5454, true]

// stringArr[0]=545 //error 
stringArr[0] = "Nothing"
// stringArr.push(45) error

guitars[0] = 3453;
guitars.unshift('good moring')
// guitars.unshift(true) error

// reassignment of arrays

// stringArr=guitars error

guitars = stringArr

mixData = guitars



let test = []
let bands: string[] = [];
bands.push('Vans Toyota')


// Tuple

let myTuple: [string, number, boolean] = ['furqan', 21, true]

let mixed = ['butt', 45, false];

mixed = myTuple

// myTuple=mixed error 



// Objects

let myObj: object;
myObj = []
console.log(typeof myObj)

myObj = bands;
myObj = {}


const objExample = {
    name: "furqan",
    age: 21
}


// objExample.name=35435; error



// type Guitarist={
//     name:string,
//     // active?:boolean, //now this become optional
//     active:boolean,
//     albums:(string | number) []
// }

// type and interface working similiar

interface Guitarist {
    name?: string,
    // active?:boolean, //now this become optional
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Furqan',
    active: false,
    albums: [3434, 56556, "OU%^&"]
}

let JP: Guitarist = {
    name: 'Nothing',
    active: false,
    albums: ['3434', '56556', "OU%^&"]
}

// evh=JP


// const greetGuitarist=(guitarist:Guitarist)=>{
//     return `Hello ${guitarist.name}`
// }

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`
    }
    return "Some data is undefine";
}


console.log(greetGuitarist(JP))




// Enums

enum Grade{
    U=1,F,D,C,B,A
}


console.log(Grade.F)








