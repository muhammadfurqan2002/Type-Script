// type casting 


// type assertions

type One=string;
type Two=string|number;
type Three='hello';

// convert to more or less sepcific 

let a:One='hellow'
let b=a as Two //less specific
let c=a as Three //more specific

console.log(a)
console.log(b)
console.log(c)


let d=<One>'world'
let e=<string|number>'world'


const addOrConcat=(a:number,b:number,c:'add'|'concat'):number | string=>{
    if(c==='add') return a+b;

    return ' '+a+b
}

//  Be careful! TS sees no problem -but a string is returned
// let myVal:string=addOrConcat(2,2,'ad') as string;

// console.log(myVal)

// 10 as string  error 


(10 as unknown) as string //double catsing


// The DOM 

const img=document.querySelector('img')!
const myImg=document.getElementById('#img') as HTMLImageElement
const nextImg=<HTMLImageElement>document.getElementById('#img') 

img.src
myImg.src



