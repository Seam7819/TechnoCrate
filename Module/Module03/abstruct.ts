{abstract class Animal {
  // abstract method — no implementation
  abstract makeSound(): void;

  // normal method — has implementation
  move(): void {
    console.log("Moving...");
  }
}

// ❌ You cannot do this:
// const a = new Animal(); // Error

{
    class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const d = new Dog();
d.makeSound(); // Output: Woof! Woof!
d.move();      // Output: Moving...

}
abstract class Vehicle {
  abstract start(): void;  // must be implemented
  stop(): void {           // optional method
    console.log("Vehicle stopped");
  }
}

class Car extends Vehicle {
  start(): void {
    console.log("Car started");
  }
}

const c = new Car();
c.start(); // Car started
c.stop();  // Vehicle stopped

}