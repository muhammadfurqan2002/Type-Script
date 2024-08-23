"use strict";
class Code {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
// const Furqan=new Code('Furqan',"POPUP",22,'Typescript')
const Furqan = new Code('Furqan', "POPUP", 22);
console.log(Furqan.getAge());
// console.log(Furqan.age)
class WebDev extends Code {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `Hello i write my text in ${this.lang}`;
    }
}
const newObj = new WebDev("Mac", "Furqan", "Cham Cham Nacho", 45);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrumnet = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrumnet}`;
    }
}
const guitarist = new Guitarist("Jimmy", "guitar");
console.log(guitarist.play("strums"));
// ////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const obj1 = new Peeps("John");
const obj2 = new Peeps("John");
const obj3 = new Peeps("John");
const obj4 = new Peeps("John");
console.log(Peeps.count);
// ///////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        // this.dataState.push(value)
        if (Array.isArray(value) && value.every((elem) => typeof elem === 'string')) {
            this.dataState = value;
        }
        else {
            throw new Error('Params is not an array of strings');
        }
    }
}
const band = new Bands();
band.data = ['1', '3', '5'];
console.log(band.data);
