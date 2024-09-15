// Basic Types
// Primitives types (numer,string,boolean)
// Arrays
// Tuples
// Enums
// Any,Unknown,Void,Null,Undefined,Never

// -------------------- Primitives and reference -----------------------

// primitive types
// let a=12;
// let abcd=false;
// // arrays
// let arr=[1,2,3,4,"Furqan",true]
// let array:number[]=[12,3,4,5,6]
// // tuples

// let arr2:[string,number]=["Furqan",12343];
// // let arr3=["Furqan",2134545]
// // arr3=arr2

// // Enum


// enum UserRoles{
//     ADMIN="admin",
//     GUEST="guest",
//     SUPER_ADMIN="super_admin"
// }


// enum StatusCode{
//     ADANDONED="abandoned status code 500",
//     NOTFOUND="not found status code 404",
// }



// // Any, Unknown, Void, Null, Undefined, Never


// let Any:any

// Any="Furqan";
// Any=3435;
// Any=():number=>{
//     return 20;
// }


// let v:unknown;
// v=12;


// if(typeof v === "string"){
//     v.toUpperCase()
// }


//void 

// function abcd():void{
//     console.log("Good Morning")
// }



// NUll

// let a :null;


// function abcd():never{
//     while(true){

//     }
// }



// Type inefernece 
// Understanding type inference
// Type annotations


// let s="furqan"

// let a:number|string|boolean


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Interfaces

// usef for shaping objects

// interface User{
//     name:string,
//     email:string,
//     password:string,
//     gender?:string,
// }

// interface admin extends User{
//     isAdmin:boolean
// }
// function getUserData(obj:admin){

// }



// getUserData({name:"furqan",email:"abc@gmail.com",password:"pakistani1",isAdmin:false})




// /////////////////////////////////////////////////////////////////////////////

// TYPES
// usef for defining types


// type data=number|string|boolean|unknown

// function abcd(arg:data){
//     console.log(arg)
// }





type User={
    name:string,
    email:string
}


type Admin=User &{
    getDetails(user:string):void,
}