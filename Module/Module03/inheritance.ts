{
    //inheritance
    class Parent {
        name : string;
        age : number;
        address : string

        constructor(name:string,age:number,address:string){
            this.name = name;
            this.age = number;
            this.address = address;
        }
        getSleepOfHours(numOfHours:number){
            console.log(`This person Sleep for ${numOfHours} hours`);
        }
    }

    class Teacher extends Parent {
        designation : string;
        constructor(name:string,age:number,address:string,designation : string){
            super(name,age,address);
            this.designation = designation;
        }
        takeClass(totalHours :number){
            console.log(`${this.name} take classes for ${totalHours} hours`);
        }
    }

    class Student extends Parent {
        constructor(name:string,age:number,address:string){
            super(name, age, address)
        }
    }
    const student1 = new Student('Abrar',25,'jigatola');
    student1.getSleepOfHours(7)
}