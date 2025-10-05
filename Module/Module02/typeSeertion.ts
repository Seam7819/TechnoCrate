/* 
Type Assertion is a way to tell the TypeScript compiler that you know the type of a value better than it does.
It does not change the actual type at runtime — it only helps the compiler understand how you want to treat the value.

It’s like saying:

“Hey TypeScript, trust me — I know what type this value really is.”
*/


let value: unknown = "Hello World";
let strLength: number = (value as string).length;
// or
let strLength2: number = (<string>value).length;

const value2 = 222;

/*
*

Type Narrowing

Definition:
Type narrowing means refining a variable’s type based on checks or conditions — like typeof, instanceof, in, or custom type guards.
It helps TypeScript understand which specific type a value has at a certain point in code.
*

*/

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // value is string here
  } else {
    console.log(value.toFixed(2)); // value is number here
  }
}
