let myName: string = 'Nick';
const NUMBER_OF_STATES: number = 50;
const FIVE_PLUS_FOUR: number = add(5, 4);
let veggies: string[] = ['artichokes', 'cabbage', 'spinach', 'broccoli', 'parsnips'];
// array of interfaces.
interface NameAge {
    name: string;
    age: number;
}
let namesToCheck: NameAge[] = [
    {
        name: 'Isabel',
        age: 17
    },

    {
        name: 'Hallie',
        age: 18
    },

    {
        name: 'Malcolm',
        age: 37
    },

    {
        name: 'Tom',
        age: 33
    },

    {
        name: 'Nadine',
        age: 19
    },

    {
        name: 'Anne',
        age: 29
    }
];

// function to take two numbers and return their sum.
function add(num1: number, num2: number): number {
    return num1 + num2;
}
// function to say 'Hello World!'
function sayHello(): void {
    let greet: string = 'Hello World!';
    console.log(greet);
    // alert(greet);
}
// takes a name and an age and check if that person is under 21.
function checkAge(name: string, age: number): void {
    if (age < 21) {
        console.log('Sorry ' + name + ", you aren't old enough to view this page!");
    } else {
        console.log('Welcome ' + name + '!');
    }
}
// returns the length of a string.
function getLength(string: string): number {
    return string.length;
}
// while loop to step through all veggies.
let i: number = 0;
function printVeggies(vegs: string[]): void {
    while (i < vegs.length) {
        console.log(vegs[i]);
        i++;
    }
}
// function calls.
sayHello();
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
printVeggies(veggies);
// for in loop to check the age (call to checkAge function) of every person in an array (array of interfaces).
for (let n in namesToCheck) {
    checkAge(namesToCheck[n].name, namesToCheck[n].age);
}
// checking length of 'Hello World!' via getLength().
let lengthHW: number = getLength("Hello World!");
function checkLengthHW(lengthHW: number): void {
    if (lengthHW % 2 === 0) {
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');
    }
}
checkLengthHW(lengthHW);