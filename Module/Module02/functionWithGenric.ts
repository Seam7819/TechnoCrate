{
    function identity<T>(value: T): T {
  return value;
}
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair("Seam", 22);
console.log(result); // ["Seam", 22]
let user: [string, number, boolean];

user = ["Seam", 22, true];

console.log(user[0]); // "Seam"
console.log(user[1]); // 22
console.log(user[2]); // true
function makeTuple<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const tuple1 = makeTuple("Seam", 22);  // [string, number]
const tuple2 = makeTuple(true, { id: 1, name: "Anik" }); // [boolean, object]
class Container<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  getData(): T {
    return this.data;
  }
}

// Create a container for a string
const stringContainer = new Container<string>("Programiz");
console.log(stringContainer.getData()); 

// Create a container for a number
const numberContainer = new Container<number>(123);
console.log(numberContainer.getData());
}