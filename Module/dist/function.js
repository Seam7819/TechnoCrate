"use strict";
// type define in normal function and arrow function ;
function add(num1, num2) {
    return num1 + num2;
}
const addNum = (num3, num4 = 15) => num3 + num4;
//here we can also assign default value
// when a function write in a object is called method 
// object --> function --> method 
const user2 = {
    name: 'sultan',
    balance: 0,
    addBalance(balance) {
        return `my new balance is ${this.balance + balance}`;
    }
};
// You’ve defined an object literal with a method inside it. 
// To call the function addBalance, you should call it through the object (user2).
user2.addBalance(500);
const array = [1, 2, 3, 4, 5];
const newArray = array.map((elem) => elem * elem);
