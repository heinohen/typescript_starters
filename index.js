"use strict";
let sport = 'football';
console.log(sport);
let myName = 'Danny';
myName.toLowerCase();
console.log(myName);
let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr);
//union
let myAge;
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
let point1 = { x: 1, y: 1 };
let point2 = point1;
point1.y = 100;
console.log(point2); // both point to same memory addr so when we change one the other one changes also
//arrays
let numArray = [1, 2, 3, 4, 5]; // only numbers allowed
let nameArray = ['a', 'b', 'c']; // only strings
let boolArray = [true, false]; // only booleans
let persons = [
    { name: "Henk", age: 12 },
    { name: "Ants", age: 1 }
];
let randomArray = ['hello', false, 1]; // can be anything
randomArray.push(4);
randomArray.push(true);
console.log(randomArray);
//define personArray with unions 
let unionArray = ["hey", 1, false]; // can be any of the three
unionArray[0] = 2;
console.log(unionArray);
// tuple dec'l
let personTuple = ['dani', 2, false];
//objects
//object 'frame'
let man;
//obj creation. must contain all three
man = {
    name: 'joni',
    location: 'home',
    isProgrammer: false,
};
console.log(man);
//obj attrs
console.log(man.isProgrammer);
;
let man1 = {
    name: "foo",
    age: 1,
    hasEaten: false,
};
let sayStuff = {
    sayHi: function (name) {
        return `Hi ${name}`;
    },
    sayBye: (name) => `Bye ${name}`,
};
console.log(sayStuff.sayHi('Heisenberg'));
console.log(sayStuff.sayBye('Heisenberg'));
// functionssss
function circle(diam) {
    return "The circumference is " + Math.PI * diam;
}
console.log(circle(10));
// as arrow
const square = (height, width) => {
    return "Area of the square is " + height * width;
};
console.log(square(10, 10));
const triangle = (height, width) => {
    return "Area of the triangle is " + (height * width) / 2;
};
console.log(triangle(10, 10));
const add = (a, b, c) => {
    console.log(c);
    return a + b;
};
console.log(add(5, 4, "anything!"));
const logMessage = (msg) => {
    console.log('This is the message to be logged: ' + msg);
};
logMessage('Don\'t log this');
// function signature
let sayHello;
sayHello = (name) => {
    console.log('Hello ' + name);
};
sayHello("Dan");
// Any type
let age = "100";
age = 5;
age = {
    years: 100,
    months: 2,
};
console.log(age);
const person1 = {
    name: 'John',
    id: "this is stringID",
};
const person2 = {
    name: "Dan",
    id: 123,
};
const sayHey = (person) => {
    return "Hi " + person.name;
};
const sayByebye = (person) => {
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
    constructor(name, isCool, email, pets) {
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
let People = [];
People.push(person4);
People.push(new Person("Matt", false, "asd@das.com", 1));
People.forEach(person => console.log(person.sayHello()));
// class, but cleaner
class Animal {
    constructor(name, age, email, pets) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.pets = pets;
    }
    tellMyAttributes() {
        return `Hi, i\'m ${this.name}, im ${this.age} years old, i dont have email, as i am an animal`;
    }
}
const ani1 = new Animal("port", 123, "1@3.com", 0);
console.log(ani1.tellMyAttributes());
class Tiger extends Animal {
    constructor(name, age, email, pets, stripes) {
        super(name, age, email, pets);
        this.name = name;
        this.age = age;
        this.email = email;
        this.pets = pets;
        this.stripes = stripes;
    }
}
const tikru = new Tiger("tikru", 9, "N/A", 0, 123);
console.log(tikru.tellMyAttributes());
function sayBroom(car) {
    console.log(`Starting ${car.make}`);
}
sayBroom({
    make: 'BMW',
    age: 1999,
});
function startPeadaling(bike) {
    console.log(`Pedaling ${bike.make}`);
}
startPeadaling({
    make: 'ALPS',
    shifts: 2,
});
// or define anonymously
function goAway(goner) {
    console.log(`Going away, ${goner.name} ${goner.age}`);
}
goAway({
    name: "Mark",
    age: 1234,
});
;
;
const workerBee = {
    name: "Mary",
    honey: false,
};
console.log(`Bee's name is ${workerBee.name}`);
const jaws = {
    name: "jaws",
    teeth: 3432,
};
console.log(`This species is ${typeof (jaws)}, its name is ${jaws.name} and it has ${jaws.teeth} teeths!`);
const schoolBus = {
    name: "toot toot",
    seats: 34,
};
const bulker = {
    name: "one",
    horsepower: 1,
    broadcast: sentence => console.log(sentence),
};
bulker.broadcast(`This is test broadcast from ${bulker.name}`);
class Racecar {
    constructor(name, horsepower) {
        this.name = name;
        this.horsepower = horsepower;
    }
    format() {
        return this.name.toLocaleUpperCase(); // ALL CAPS!!!!!!!11111111
    }
}
let racecar1;
let racecar2;
racecar1 = new Racecar('mCdriver', 123);
racecar2 = new Racecar('winER', 354);
let cars = [];
cars.push(racecar1);
cars.push(racecar2);
cars.forEach(rc => console.log(rc.format()));
// generix
const addID = (obj) => {
    let id = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { id });
};
let racecar3 = addID({ name: "losser", horsepower: 3 });
console.log(racecar3.id);
console.log(racecar3.name);
function logLength(a) {
    console.log(a.length);
    return a;
}
let hello = "Hello World";
logLength(hello); // can be called because it knows that string has length method to be called!
/*
Trakd3t1 O(n) runtime
*/
function getSecondSmallest(inputArray) {
    //if len is < 2
    if (inputArray.length < 2) {
        return -999999; // this is to show that the call was invalid as we dont have at least 2 indexes
    }
    let smallest = inputArray[0];
    let nextSmallest = inputArray[1];
    // if len is 2
    if (inputArray.length == 2) {
        if (nextSmallest < smallest) {
            let temp = smallest;
            smallest = nextSmallest;
            nextSmallest = temp;
        }
        return nextSmallest; // return nextSmallest from here
    }
    // if len > 2
    // start from third index as two in the start is already checked
    for (let i = 2; i < inputArray.length; i++) {
        // if we have same values in both
        if (smallest == nextSmallest && inputArray[i] > smallest) {
            nextSmallest = inputArray[i];
        }
        // check if it is smaller or equal to smallest 
        else if (inputArray[i] < smallest) {
            let temp = smallest;
            smallest = inputArray[i];
            nextSmallest = temp;
        }
        // check if its larger than smallest and smaller than the next
        else if (inputArray[i] > smallest && inputArray[i] < nextSmallest) {
            nextSmallest = inputArray[i];
        }
    }
    return nextSmallest;
}
console.log("***TESTS***");
console.log(getSecondSmallest([1, 2, 3, 4, 5]) + " expected 2" // 2
);
console.log(getSecondSmallest([5, 4, 3, 2, 1]) + " expected 2" // 2
);
console.log(getSecondSmallest([3, 6, 5, 4, 3]) + " expected 4" // 4
);
console.log(getSecondSmallest([3, 3, 3, 3, 6, 3]) + " expected 6" // 6
);
console.log(getSecondSmallest([1]) + " expected -999999" // -999999
);
console.log(getSecondSmallest([3, 9]) + " expected 9" // 9
);
console.log(getSecondSmallest([-555, -333, -222, -111]) + " expected -333" // -333
);
//# sourceMappingURL=index.js.map