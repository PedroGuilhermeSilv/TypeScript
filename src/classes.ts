interface IPerson{
    id: number;
    name: string;
    age: number;
    save(): void;

}

class Person implements IPerson{
    readonly id: number ;
    name: string;
    age: number;
    constructor(id: number,name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    save(){
        console.log('Person is saved');
    }

}

const jhon = new Person(21,'John', 20);


class Employee extends Person{
    constructor(id: number, name: string, age: number, salary: number){
        super(id, name, age);

    }
    WhenAIn(){
        console.log(this.age);
    }
}


