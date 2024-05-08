"use strict";
let age = 20;
const firstName = 'John';
const isValid = true;
const idn = 12345;
const list = [1, 2, 3, 4, 5];
//Tuple
const person = ['John', 20];
const people = [['John', 20], ['Jane', 25]];
// Intersection
const product = 'Iphone 12';
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// Type Assertion
const productName = 'Iphone 12';
// let itemId = productName as string;
let itemId = productName;
console.log(); // 20
