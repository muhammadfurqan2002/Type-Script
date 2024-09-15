// generics



const echo=<T>(arg:T):T=>{
    return arg;
}

const isObj=<T>(arg:T):boolean=>{
    return (typeof arg==='object' && !Array.isArray(arg) && arg!==null)
}


console.log(isObj(89))
console.log(isObj(null))



const isTrue=<T>(arg:T):{arg:T,is:boolean}=>{
    if(Array.isArray(arg) && !arg.length){
        return {arg,is:false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg,is:false}
    }
    return {arg,is:!!arg}
}