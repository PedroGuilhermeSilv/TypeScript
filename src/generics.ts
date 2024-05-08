const returnValue = <T>(mensage: T): T=>{
    return mensage;
}

const value = returnValue<string>('Hello World');
const value2 = returnValue<number>(100);

function getFirstValueFromArray<T>(arr: T[]): T{
    return arr[0];
}

const value3 = getFirstValueFromArray<number>([1,3,4])

//Promises

const returnPromise = async (): Promise<number>=>{
    return 5
}

class GenericNumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;

    constructor(zeroValue: T, add: (x: T, y: T) => T){
        this.zeroValue = zeroValue;
        this.add = add;
    }
}


const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
    return x + y;
});