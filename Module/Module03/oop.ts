{
    /*
    What a Class Is
    A class is like a design or model for creating objects that 
    share similar structure and behavior. 
     */

    class Animal {
        name: string;
        sound: string;
        numOfLeg: number

        /*
        What Is a Constructor?

        A constructor is a special function inside a class that 
        automatically runs when you create (or "construct") an object from that class. 
         */
        constructor(name: string, sound: string, numOfLeg: number) {
            this.name = name;
            this.numOfLeg = numOfLeg;
            this.sound = sound
        }



        //write a function which is called method
        makeSound() {
            console.log(`this ${this.name} is trying ${this.sound}`);
        }
        
    }



    /* 
    🧩 What Is an Instance?

    An instance is a real object created from a class.
    A class is just a blueprint or template.
    An instance is the actual object built using that template.
    🏠 Example to Understand
    Think of a class like a blueprint for a house.
    You can build many houses (instances) from the same blueprint. */


    const dog = new Animal("dog", "bark bark", 4);
    const cat = new Animal("cat", "mew mew", 4)

    dog.makeSound()
    cat.makeSound()

}