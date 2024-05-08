"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    save() {
        console.log('Person is saved');
    }
}
const jhon = new Person(21, 'John', 20);
class Employee extends Person {
    constructor(id, name, age, salary) {
        super(id, name, age);
    }
    WhenAIn() {
        console.log(this.age);
    }
}
