// class Human{
    
//     static version=0.5;

//     constructor(public _name:string,public _age:number){

//     }

//     public set name(name:string){
//         this._name=name;
//     }
    
    
//     public get value() : string {
//         return this._name
//     }

//     static getRandomNumber(){
//         return Math.random();
//     }
// }


// abstract class Numbers{
//     getRandomNumber():number;
// }

// class RandomNumber extends Numbers{
//        getRandomNumber(): number {
//             return Math.random();           
//        }
// }



// functions


// function abcd(name?:string|boolean,age:number=-1,cb:(agr:string)=>void):void{
//     cb("Good morning")
// }


// abcd("furqan",22,(arg:string)=>{
//     console.log(arg)
// })




//////////////////////////// rest parameters /////////////////////////////////


// const users=(...arg:number[])=>{
//     arg.forEach((e)=>{
//         console.log(e)
//     })
// }


// users(1,2,3,4,5,6,7,8,9);


// ///////////////////////// Generics ///////////////////////////////////////

// function abcd<T>(a:T,b:number){
    
// }


// abcd<string>("Furqan",234)
// abcd(1234,54456)




// class CallToTom{
//     public callTom(){
//         console.log("Ringing to Tom")
//     }
// }
// class CallToTomi{
//     public callTomi(){
//         console.log("Ringing to Tomi")
//     }
// }




// function calls(calling:CallToTom | CallToTomi){
//     if(calling instanceof CallToTom){
//         calling.callTom();
//     }else if(calling instanceof CallToTomi){
//         calling.callTomi();
//     }else{
//         throw new Error("No Instance Found")
//     }
// }



// interface Halua<T>{
//     name:string,
//     age:number,
//     key:T
// }

// function abcd(haula:Halua<string>){
//     console.log(haula.name)
// }

// abcd({name:"Furqan",age:67,key:"khjkh"})