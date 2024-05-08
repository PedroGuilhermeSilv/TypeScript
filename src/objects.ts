// Type
type Order = {
    id: number;
    name: string;
    isValid: boolean;
}


type User = {
    name: string;
    age: number;
    isValid: boolean ;
    lastName?: string;
    orders?: Order[];
    register(): string;
}

const user: User = {
    name: 'John',
    age: 20,
    isValid: true,
    orders: [
        {id: 1, name: 'Phone', isValid: true},],
    register(){
        return `${this.name} is now registered`
    }
}


const printLog = (a: string): void =>{
    console.log(a);
}

printLog(user.lastName!)


//Union
type Author = {
    city: string;
}

const author: User & Author = {
    name: 'John',
    age: 20,
    isValid: true,
    city: 'New York',
    register(){
        return `${this.name} is now registered`
    }
}


//Interface
interface OrderInterface {
    readonly id: number;
    name: string;
    isValid: boolean;
    register(): string;
    
}

const order: OrderInterface = {
    id: 1,
    name: 'Phone',
    isValid: true,
    register(){
        return `${this.name} is now registered`
    }
}


interface MathFunction {
    (a: number, b: number): number;
}

const add: MathFunction = (a: number, b: number): number =>{
    return a + b;
}
