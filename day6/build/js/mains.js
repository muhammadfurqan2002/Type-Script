"use strict";
// index signatures
// interface TransactionObj{
//     [index:string]:number
// }
// interface TransactionObj{
//    readonly [index:string]:number
// }
const todaysTransactions = {
    Pizza: 10,
    Books: -20,
    Job: 100
};
console.log(todaysTransactions.Books);
console.log(todaysTransactions['Books']);
let prop = "Pizza";
console.log(todaysTransactions[prop]); // error index signature
const todaysNet = (transactions) => {
    let total = 0;
    for (let transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Furqan",
    GPA: 3.9,
    classes: [100, 200]
};
for (let key in student) {
    console.log(`${key}:${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(`${student[key]}`);
});
const logStudent = (student, key) => {
    console.log(student[key]);
};
logStudent(student, "GPA");
const monthlyIncomes = {
    salary: 500000,
    bonus: 2000,
    sidehustle: 200
};
for (const i in monthlyIncomes) {
    console.log(monthlyIncomes[i]);
}
