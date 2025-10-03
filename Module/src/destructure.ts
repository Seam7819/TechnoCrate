{

    // object destructuring 

const user = {
    id : 243,
    name : {
        firstName : 'sultan',
        middleName : 'nasir',
        lastName : 'Seam'
    },
    number : 1932745382,
}

// now destructure the object 

const {id,name : {lastName: seshName}, number} = user; //here i did type Aliases that means rename of a variable

// now we will see array destructuring 

const friends = ['maidul', 'anik', 'miqi', 'sakib','ratan', 'nurul'];

// const [,, kabila, ...rest] = friends;
// console.log(kabila); // 👉 "miqi"
// console.log(rest);   // 👉 ["sakib", "ratan", "nurul"]

// rest.forEach(friend => console.log(friend));
// Output:
// sakib
// ratan
// nurul

}