"use strict";
var myName = 'Nick';
var NUMBER_OF_STATES = 50;
var FIVE_PLUS_FOUR = add(5, 4);
var veggies = ['artichokes', 'cabbage', 'spinach', 'broccoli', 'parsnips'];
var namesToCheck = [
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
function add(num1, num2) {
    return num1 + num2;
}
// function to say 'Hello World!'
function sayHello() {
    var greet = 'Hello World!';
    console.log(greet);
    // alert(greet);
}
// takes a name and an age and check if that person is under 21.
function checkAge(name, age) {
    if (age < 21) {
        console.log('Sorry ' + name + ", you aren't old enough to view this page!");
    }
    else {
        console.log('Welcome ' + name + '!');
    }
}
// returns the length of a string.
function getLength(string) {
    return string.length;
}
// while loop to step through all veggies.
var i = 0;
function printVeggies(vegs) {
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
for (var n in namesToCheck) {
    checkAge(namesToCheck[n].name, namesToCheck[n].age);
}
// checking length of 'Hello World!' via getLength().
var lengthHW = getLength("Hello World!");
function checkLengthHW(lengthHW) {
    if (lengthHW % 2 === 0) {
        console.log('The world is nice and even!');
    }
    else {
        console.log('The world is an odd place!');
    }
}
checkLengthHW(lengthHW);
