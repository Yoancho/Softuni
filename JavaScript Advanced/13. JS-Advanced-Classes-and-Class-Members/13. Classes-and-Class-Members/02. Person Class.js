
class Person { constructor(firstName, lastName, age, email) {
    [this.firstName, this.lastName, this.age, this.email] = [firstName, lastName, age, email];
}
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
};

function getPersons() {

    return [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com'),
    ];
};

let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

console.log(getPersons().join(', '));