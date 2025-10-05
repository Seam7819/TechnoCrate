/* 
An interface is a structure (blueprint) that defines the shape of an object — what properties and methods it should have.

It helps TypeScript ensure type safety and makes code more organized and readable. */

interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional property
}

const user1: User = {
  name: "Seam",
  age: 22,
};
interface Person {
  name: string;
  greet(): void;
}

const person: Person = {
  name: "Seam",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Tommy",
  breed: "Labrador",
};
