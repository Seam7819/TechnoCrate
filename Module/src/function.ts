// type define in normal function and arrow function ;

function add(num1: number,num2: number) : number {
    return num1 + num2;
}

const addNum = (num3: number,num4: number = 15 ) : number => num3 + num4; 
//here we can also assign default value


// when a function write in a object is called method 
// object --> function --> method 

const user2 = {
    name : 'sultan',
    balance : 0,
    addBalance(balance : number) : string{
        return `my new balance is ${this.balance+ balance}`
    }
    
}
// You’ve defined an object literal with a method inside it. 
// To call the function addBalance, you should call it through the object (user2).
user2.addBalance(500);