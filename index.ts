//freecodecamp's tutorial



let sport = 'football';
console.log(sport);

let myName = 'Danny';
myName.toLowerCase();
console.log(myName);

let arr = [1,3,5,7];
arr.pop()
console.log(arr);


//union

let myAge: string | number;

myAge = 5; //as number
myAge = '5'; //as string

let firstName = new String('Danny');
console.log(firstName);

//primitives
let x = 2;
let y = 1;
x = y;
y = 100;
console.log(x); // 1

//references
let point1 = {x: 1, y: 1};
let point2 = point1;
point1.y = 100;
console.log(point2); // both point to same memory addr so when we change one the other one changes also


//arrays
let numArray: number[] = [1,2,3,4,5]; // only numbers allowed
let nameArray: string[] = ['a','b','c']; // only strings
let boolArray: boolean[] = [true, false]; // only booleans
let persons: object[] = [   // only objects
    {name: "Henk", age: 12},
    {name: "Ants", age: 1}
]
let randomArray: any[] = ['hello',false,1]; // can be anything
randomArray.push(4);
randomArray.push(true);
console.log(randomArray);

//define personArray with unions 

let unionArray: (string | number | boolean)[] = ["hey", 1, false]; // can be any of the three
unionArray[0] = 2;
console.log(unionArray);


// tuple dec'l
let personTuple: [name:string, age:number, hasEaten:boolean] = ['dani', 2, false];

//objects

//object 'frame'
let man: {
    name: string;
    location: string;
    isProgrammer: boolean;
}

//obj creation. must contain all three
man = {
    name: 'joni',
    location: 'home',
    isProgrammer: false,
};
console.log(man);
//obj attrs
console.log(man.isProgrammer);

//interface
interface Man {
    name: string,
    age: number,
    hasEaten: boolean,
};

let man1: Man = {
    name: "foo",
    age: 1,
    hasEaten: false,
};


interface Speech {
    sayHi(name: string): string; // oldskool js
    sayBye: (name: string) => string; // ES6 arrow
}

let sayStuff: Speech ={
    sayHi: function (name: string) {
        return `Hi ${name}`;
    },
    sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi('Heisenberg'));
console.log(sayStuff.sayBye('Heisenberg'));

// functionssss

function circle(diam: number): string {
    return "The circumference is " + Math.PI * diam;
}

console.log(circle(10));

// as arrow

const square = (height: number, width: number): string => { //explicit return
    return "Area of the square is " + height * width;
}

console.log(square(10, 10));


const triangle = (height: number, width: number) => { // inferred typing
    return "Area of the triangle is " + (height*width) / 2;
};

console.log(triangle(10, 10));

const add = (a: number, b: number, c?: number | string) => {
    console.log(c);
    return a+b;
}

console.log(add(5,4,"anything!"));

const logMessage = (msg: string): void => { // void type explicit -- inferred is without return type
    console.log('This is the message to be logged: ' + msg);
}

logMessage('Don\'t log this');

// function signature

let sayHello: (name: string) => void;

sayHello = (name) => {
    console.log('Hello ' + name);
};

sayHello("Dan");


// Any type
let age: any = "100";
age = 5;
age = {
    years: 100,
    months: 2,
};
console.log(age);


// Type Aliases

type StringOrNumber = string| number;

type PersonObject = {
    name: string;
    id: StringOrNumber;
};

const person1: PersonObject = {
    name: 'John',
    id: "this is stringID",
};

const person2: PersonObject = {
    name: "Dan",
    id: 123,
};

const sayHey = (person: PersonObject) => {
    return "Hi " + person.name;
};

const sayByebye = (person: PersonObject) => {
    return "Bye " + person.id;
};

console.log(sayHey(person2));
console.log(sayByebye(person1));

/* 
const link = document.querySelector('a');
console.log(link.href); // "Object is possibly 'null." --> Can cause problems

const link = document.querySelector('a')!; // ! makes this certain that we know it wont be null or undefined ** this works
console.log(link.href);

const form = document.getElementById('signup-form');
console.log(form.method); // "Object is possibly null +++++ Property method does not exist on type HTMLElemen."

const form = document.getElementById('signup-form') as HTMLFormElement; ** this works
console.log(form.method); 
*/


// class formation  
class Person {
    readonly name: string; // this property is now immutable - it can only be read
    private isCool: boolean; // classic encapsulation
    protected email: string; // classic this or subclass mod
    pets: number;



    constructor(name: string, isCool: boolean, email:string, pets: number) {
        this.name = name;
        this.isCool = isCool;
        this.email = email;
        this.pets = pets;
    }

    sayHello() {
        return `Hi, my name is ${this.name} and i have ${this.pets} pets`; 
    }
}

const person4 = new Person('Paul', true, "1@2.com", 3);

console.log(person4.sayHello());

let People: Person[] = [];
People.push(person4);
People.push(new Person("Matt", false, "asd@das.com", 1));

People.forEach(person => console.log(person.sayHello()));

// class, but cleaner

class Animal {
    constructor(
        readonly name: string,
        protected age: number,
        protected email: string,
        public pets: number
    ) {}

    tellMyAttributes(): string {
        return `Hi, i\'m ${this.name}, im ${this.age} years old, i dont have email, as i am an animal`
    }
}

const ani1 = new Animal("port", 123, "1@3.com", 0);

console.log(ani1.tellMyAttributes());

class Tiger extends Animal {
    private stripes: number;

    constructor(
        readonly name: string,
        protected age: number,
        protected email: string,
        public pets: number,
        stripes: number
    ) {
        super(name,age,email,pets)
        this.stripes = stripes;
    }
}

const tikru = new Tiger("tikru", 9, "N/A", 0, 123);

console.log(tikru.tellMyAttributes());


//interfaces in ts


// define interface -- how object should look like
interface Car {
    make: string;
    age: number;
}

function sayBroom(car: Car) {
    console.log(`Starting ${car.make}`);
}

sayBroom({
    make: 'BMW',
    age: 1999,
});


// define using a type alias

type Bike = {
    make: string;
    shifts: number;
}
function startPeadaling(bike: Bike) {
    console.log(`Pedaling ${bike.make}`);
}

startPeadaling({
    make: 'ALPS',
    shifts: 2,
});

// or define anonymously

function goAway(goner: {name: string; age: number}) {
    console.log(`Going away, ${goner.name} ${goner.age}`);
}
goAway({
    name: "Mark",
    age: 1234,
});


//extending interface
interface Insect {
    name: string
};

interface Bee extends Insect {
    honey: boolean
};

const workerBee: Bee = {
    name: "Mary",
    honey: false,
}

console.log(`Bee's name is ${workerBee.name}`);

// extending via intersection

type Fish = {
    name: string
}

type Shark = Fish & {
    teeth: number
}

const jaws: Shark = {
    name: "jaws",
    teeth: 3432,
}

console.log(`This species is ${typeof(jaws)}, its name is ${jaws.name} and it has ${jaws.teeth} teeths!`);

// adding new fields to existing interface 

interface Bus {
    name: string
}

interface Bus {
    seats: number
}

const schoolBus: Bus = {
    name: "toot toot",
    seats: 34,
}
/* Not allowed on Type!
type Flyer = {
name: string
}

type Flyer = {
tail: boolean
}
// ERROR: Duplicate identifier 'Animal'.
*/

//interfaces can also define function signatures!

interface Boat {
    name: string
    horsepower: number
    broadcast(sentence: string): void
}

const bulker: Boat = {
    name: "one",
    horsepower: 1,
    broadcast: sentence => console.log(sentence),
};

bulker.broadcast(`This is test broadcast from ${bulker.name}`);



//interfaces with classes (this is same from Java OOP)

interface HasFormatter {
    format(): string;
}

class Racecar implements HasFormatter {
    constructor(
        public name: string,
        protected horsepower: number,
    ) {}

    format(): string {
        return this.name.toLocaleUpperCase(); // ALL CAPS!!!!!!!11111111
    }
}

let racecar1: HasFormatter;
let racecar2: HasFormatter;

racecar1 = new Racecar('mCdriver', 123);
racecar2 = new Racecar('winER', 354);

let cars: HasFormatter[] = [];

cars.push(racecar1);
cars.push(racecar2);

cars.forEach(rc => console.log(rc.format()));


// generix

const addID = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 1000);

    return { ...obj, id};
};

let racecar3 =  addID( {name: "losser",horsepower: 3});
console.log(racecar3.id);
console.log(racecar3.name);

// generalization using multiple types instead of 'any' type

interface hasLength {
    length: number;
}

function logLength<T extends hasLength>(a: T) {
    console.log(a.length);
    return a;
}


let hello = "Hello World";
logLength(hello); // can be called because it knows that string has length method to be called!















