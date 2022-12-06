//freecodecamp's tutorial

//freecodecamp.org/news/learn-typescript-beginners-guide/

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



















