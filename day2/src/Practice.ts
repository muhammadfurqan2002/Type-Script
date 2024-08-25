// // let name:string
// let Name:string="furqan"
// let Age:number=343;
// let T20P:boolean|number;

// T20P=1;


// const Sum=():void=>{
//     console.log("good morning")
// }
// const _Sum=(num1:number,num2:number):number=>{
//     return num1+num2;
// }

// let regExp:RegExp=/\w+/g



// // -------------------------Arrays


// let array1:(number|string)[]=["Furqan",2,3,4,5,6]
// let array2:number[]=[1,2,3,4,5,6]

// let array3:boolean[]=[true,false];

// // array2=array1; error beacuse array2 is only integers array
// array1=array2


// let Test:any=[]

// Test.push(1)
// Test.push("Nice one")
// Test.push(true);

// // Tuple

// let MyTuple:[string,number,boolean]=['Furqan',112002,true]
// let Mixed=["Muneeb",132002,false]

// // MyTuple=Mixed not assignable because value of Mixed can be change as well we not define it explicitly

// Mixed=MyTuple;


// ----------------------------------------------------------

let MyObj:object;

myObj=[]
console.log(typeof myObj)

myObj=bands


const _myObj={
    name:"Furqan",
    age:21
}


// _myObj.name=45;
// _myObj.age=34

type User={
    name:string,
    active?:boolean,
    posts:(number|string)[]
}

let user:User={
    name:"Furqan",
    // active:true,
    posts:["Pic1",45]
}

interface Quizzes{
    name:(string|number)[],
    type:string,
    marks:(string|number)[],
    student:object
}

let student:Quizzes={
    name:["Quiz-1","Quiz-2"],
    type:"Objective",
    marks:["fail",20],
    student:user
}


console.log(student)



