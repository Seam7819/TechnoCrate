{

    /*🧩 What Is a Type Guard?

A Type Guard is a special check you do in TypeScript to narrow down the type of a variable at runtime.
It helps TypeScript know what kind of value a variable really holds inside an if-statement.

🧠 Why We Need It

TypeScript is a statically typed language — but sometimes a variable can hold more than one type (called a union type). 
     */
    function printType(data: string | number | boolean) {
        if (typeof data === "string") {
            console.log("It's a string:", data.toUpperCase());
        } else if (typeof data === "number") {
            console.log("It's a number:", data.toFixed(2));
        } else {
            console.log("It's a boolean:", data ? "true" : "false");
        }
    }

    printType("hello");
    printType(42);
    printType(true);

    // type guard in

    {
        type normalUser ={
        name : string;
    }
     
    type adminUser = {
        name : string;
        role : 'admin'
    }

    const getUser = (user : normalUser | adminUser) =>{
        if('role' in user){
            console.log(`my name is ${user.name} and working as ${user.role}`);
        }else{
            console.log(`my name is ${user.name} `);
        }
    }


    

    }
}