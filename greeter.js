"use strict";
function greeter(person) {
    return "Hello, " + person;
}
var user = "Nick";
document.body.textContent = greeter(user);
function greetern(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var usern = { firstName: "Nick", lastName: "Mc" };
document.body.append(greetern(usern));
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var userc = new Student("Nick", "B.", "Mc");
document.body.textContent = greeter(userc.fullName);
