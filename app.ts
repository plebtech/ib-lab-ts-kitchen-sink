let name = 'Nick';

// number of US states.
const NUMBER_OF_STATES = 50;

// 5 plus 4.
const FIVE_PLUS_FOUR = add(5, 4);

let veggies = ['artichokes', 'cabbage', 'spinach', 'broccoli', 'parsnips'];

// array of objects.
let namesToCheck = [
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

/*  CALLS
    ---------- */

sayHello();

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

// while loop to step through all veggies.
i = 0;
while (i < veggies.length) {
    console.log(veggies[i]);
    i++;
}

// for in loop to check the age (call to checkAge function) of every person in an array (array of objects).
for (let i in namesToCheck) {
    checkAge(namesToCheck[i].name, namesToCheck[i].age);
}

// checking length of 'Hello World!'
let lengthHW = getLength("Hello World!");

if (lengthHW % 2 === 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}

/*  FUNCTIONS
    ---------- */

// function to take two numbers and return their sum.
function add(num1, num2) {
    return num1 + num2;
}

// function to say 'Hello World!'
function sayHello () {
    console.log('Hello World!');
}

// takes a name and an age and check if that person is under 21.
function checkAge(name, age) {
    if (age < 21) {
        console.log('Sorry ' + name + ", you aren't old enough to view this page!");
    } else {
        console.log('Welcome ' + name + '!');
    }
}

// returns the length of a string.
function getLength(string) {
    return string.length;
}