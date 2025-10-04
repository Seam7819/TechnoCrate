{

    // type Aliases

type Student = {
    name : string;
    contactNumber : string;
    age : number ;
    address : number ;
    study : string;
    isAdmin? : true
}

const student1 : Student = {
    name : ' sultan',
    contactNumber : '019392489',
    age: 26,
    address : 3443,
    study: 'gub'
}
const student2 : Student = {
    name : ' sultan',
    contactNumber : '019392489',
    age: 26,
    address : 3443,
    study: 'gub',
    isAdmin: true
}

type MyName = string;
const myName: MyName = 'sultan nasir uddin seam';
// as same we also declare number and boolean 

// now we learn about function type Aliases; 

const add = (num1 : number, num2: number):number => num1+ num2;

type Add = (num1: number, num2: number)=> number
const add2:Add = (num1 , num2) => num1+ num2;



}