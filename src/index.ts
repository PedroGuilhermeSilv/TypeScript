let age : number = 20;
const firstName: string = 'John';
const isValid: boolean = true;
const idn: any = 12345;
const list: number[] = [1, 2, 3, 4, 5];

//Tuple
const person: [string, number] = ['John', 20];
const people: [string, number][] = [['John', 20], ['Jane', 25]];

// Intersection
const product: string | number = 'Iphone 12';

//Enum
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3
}

// Type Assertion
const productName: any = 'Iphone 12';
// let itemId = productName as string;
let itemId = <string>productName;   
console.log(); // 20