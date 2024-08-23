class Code {
    // name:string
    // music:string
    // age:number
    // lang:string
    secondLang!: string

    constructor(public readonly name: string, public music: string, private age: number, protected lang: string = "Typescript") {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }

}



// const Furqan=new Code('Furqan',"POPUP",22,'Typescript')
const Furqan = new Code('Furqan', "POPUP", 22)

console.log(Furqan.getAge())
// console.log(Furqan.age)




class WebDev extends Code {
    constructor(public computer: string, name: string, music: string, age: number) {
        super(name, music, age);
        this.computer = computer;
    }
    public getLang() {
        return `Hello i write my text in ${this.lang}`
    }
}


const newObj = new WebDev("Mac", "Furqan", "Cham Cham Nacho", 45)

// ---------------interfaces with classes---------------



interface Musician {
    name: string,
    instrumnet: string,
    play(action: string): string

}


class Guitarist implements Musician {
    name: string
    instrumnet: string
    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrumnet = instrument;
    }
    play(action: string): string {
        return `${this.name} ${action} the ${this.instrumnet}`
    }

}




const guitarist = new Guitarist("Jimmy", "guitar")

console.log(guitarist.play("strums"))


// ////////////////////////////



class Peeps {
    static count: number = 0;
    static getCount(): number {
        return Peeps.count;
    }
    public id: number
    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}


const obj1 = new Peeps("John")
const obj2 = new Peeps("John")
const obj3 = new Peeps("John")
const obj4 = new Peeps("John")
console.log(Peeps.count)


// ///////////////////////////////

class Bands {
    private dataState:string[]
    constructor(){
        this.dataState=[]
    }
    public get data():string[]{
        return this.dataState;
    }
    public set data(value:string[]){
        // this.dataState.push(value)
        if(Array.isArray(value) && value.every((elem)=>typeof elem==='string')){
            this.dataState=value;
        }else{
            throw new Error('Params is not an array of strings')
        }
    }
}


const band=new Bands()

band.data=['1','3','5']
console.log(band.data)





