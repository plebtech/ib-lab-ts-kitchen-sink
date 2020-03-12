function greeter (person: string) {
    return "Hello, " + person;
}

let user = "Nick";

document.body.textContent = greeter(user);

interface Person {
    firstName: string;
    lastName: string;
}

function greetern (person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let usern = { firstName: "Nick", lastName: "Mc"};

document.body.append(greetern(usern));

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

let userc = new Student("Nick", "B.", "Mc");

document.body.textContent = greeter(userc.fullName);