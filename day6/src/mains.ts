// index signatures

interface TransactionObj {
    [index:string]:number,
    Pizza: number,
    Books: number,
    Job: number,
}

// interface TransactionObj{
//     [index:string]:number
// }
// interface TransactionObj{
//    readonly [index:string]:number
// }


const todaysTransactions: TransactionObj = {
    Pizza: 10,
    Books: -20,
    Job: 100
}



console.log(todaysTransactions.Books)
console.log(todaysTransactions['Books'])


let prop: string = "Pizza"
console.log(todaysTransactions[prop]) // error index signature


const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (let transaction in transactions) {
        total +=transactions[transaction] 
    }
    return total
}


console.log(todaysNet(todaysTransactions))


// todaysTransactions.Pizza=0;  //error with readonly


/////////////////////////////////////////


interface Student{
    [index:string]:number|string|number[] | undefined
    name:string,
    GPA:number,
    classes?:number[]
}

const student:Student={
    name:"Furqan",
    GPA:3.9,
    classes:[100,200]
}

for(let key in student){
    console.log(`${key}:${student[key as keyof Student]}`)
}


Object.keys(student).map(key=>{
    console.log(`${student[key as keyof typeof student]}`)
})

const logStudent=(student:Student,key:keyof Student):void=>{
    console.log(student[key])
}


logStudent(student,"GPA");




//////////////////////////////////////


// interface Incomes{
//     [key:string]:number,

// }


type Streams='salary'|'bonus'|'sidehustle'
type Icomes=Record<Streams,number |string>


const monthlyIncomes:Icomes={
    salary:500000,
    bonus:2000,
    sidehustle:200
}

for(const i in monthlyIncomes){
    console.log(monthlyIncomes[i as keyof Icomes])
}