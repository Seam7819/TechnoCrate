"use strict";
// Primitive data types 
const num = 25;
const myName = "sultan seam";
const isDone = true;
const undefine = undefined;
const null1 = null;
// non-primitive data types 
// array type data 
const friends = ['maidul', 'miqdad', 'mehedi'];
friends[3] = 'ratan';
// can't assign another type data in here 
const rollNumber = [12, 34, 56, 35, 7, 5];
rollNumber[3] = 43;
console.log(rollNumber);
// topple type data 
const nameRoll = ['nurul', 25, true];
// Object , Optional and Literal Types 
const user = {
    firstName: 'sultan',
    middleName: ' Nasir',
    lastName: 'seam',
    religion: "Islam",
    address: 3456,
};
// user.address = 345 Cannot assign to 'address' because it is a read-only property
