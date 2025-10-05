// optional chaining 
// if a value is available or not then we use optional chaining 

const age = 18;
if (age >=18) {
    console.log('adult');
}else{
    console.log('not adult');
}

const isAdult = age >=18 ? 'adult' : 'not adult';

// nulish coalesing 

const isAuthenticated = null;
const result1 = isAuthenticated ?? 'Guest'; //here we will get guest when variable is null or undefined 
// others time we will get empty string
const result2 = isAuthenticated ? isAuthenticated : 'Guest'; //here we will get guest is there null 




