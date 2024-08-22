// type alias
type stringOrNumber=string|number;

type stringOrNumberArray=(string| number)[] //not do this with ineterfaces

type Guitraist={
    name?:string,
    active:boolean,
    albums:stringOrNumberArray
}

type userId=stringOrNumber



// Literal Types


let myName:"Furqan"

// myName="furqan butt"; error

let userName:"Furqan"|"Muhammad Furqan" | "Furqan Butt"
userName='Muhammad Furqan'


// functions

const add=(a:number,b:number)=>{
    return a+b;
}


const logMsg=(message:any):void=>{
    console.log(message)
}
logMsg("heloo")
logMsg("Furqan")
logMsg("Hope you well")


let subtract=(a:number,b:number):number=>{
    return a-b;
}

// type numbers=(a:number,b:number)=>number;
interface numbers{
    (a:number,b:number):number;
}

let multiply:numbers=(a,b)=>{
    return a*b;
}

logMsg(multiply(2,2))




// optional paramters

const addAll=(a:number,b:number,c?:number):number=>{
    if(typeof c!=="undefined"){
        return a+b+c;
    }
    return a+b;
  
}
const multAll=(a:number,b:number,c:number=4):number=>{
   
        return a*b*c;
}

console.log(addAll(1,2))




// Rest Parameters


const total=(a:number,...nums:number[]):number=>{
    return nums.reduce((prev,curr)=>prev+curr);
}

logMsg(total(1,2,3,4,5,6,7))



// use of never type

const createError=(errorMsg:string):never=>{
    throw new Error(errorMsg)
}

// custom type card
const isNumber=(value:number):boolean=>{
    return typeof value==='number'?true:false;
}


const NumberOrString=(value:number|string):string=>{
    if(typeof value==="string")return 'string'
    if(isNumber(value))return 'number'
    return createError("This should never happen")
}

console.log(NumberOrString(78))