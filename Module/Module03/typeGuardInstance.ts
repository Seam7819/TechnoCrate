{
    // instance of 

    class Animal {
        type : string;
        species : string;

        constructor(type : string,species : string){
            this.type = type;
            this.species = species;
        }
        makeSound(animal : string){
            console.log(`This ${animal} is barking`);
        }
    }

    class Dog extends Animal {
        constructor(type : string,species : string){
            super(type,species);
        }
        makeBark(){
            console.log('This animal is barking');
        }
    }
    class Cat extends Animal {
        constructor(type : string,species : string){
            super(type,species);
        }
        makeMeaw(){
            console.log('This animal is meawing');
        }
    }

    const getAnimal = (animal : Animal) => {
        if(animal instanceof Dog){
            animal.makeBark()
        }else if(animal instanceof Cat){
            animal.makeMeaw()
        }else{
            animal.type;
        }
    }

}