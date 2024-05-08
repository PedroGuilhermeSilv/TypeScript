"use strict";
const user = {
    name: 'John',
    age: 20,
    isValid: true,
    orders: [
        { id: 1, name: 'Phone', isValid: true },
    ],
    register() {
        return `${this.name} is now registered`;
    }
};
const printLog = (a) => {
    console.log(a);
};
printLog(user.lastName);
const author = {
    name: 'John',
    age: 20,
    isValid: true,
    city: 'New York',
    register() {
        return `${this.name} is now registered`;
    }
};
const order = {
    id: 1,
    name: 'Phone',
    isValid: true,
    register() {
        return `${this.name} is now registered`;
    }
};
const add = (a, b) => {
    return a + b;
};
