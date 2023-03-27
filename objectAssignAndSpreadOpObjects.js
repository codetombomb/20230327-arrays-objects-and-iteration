// Making a shallow copy of an object
const original = { a: 1, b: 2 };


// Object.assign()
// const copy = Object.assign({}, original)


// Spread
// const copy = {...original}


// *****************************************************

// Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Object.assign()

// const copy = Object.assign({}, obj1, obj2)

const copy = {...obj1, ...obj2}

// *****************************************************


// Modifying an object's properties
const obj3 = { a: 1, b: 2 };


/* 
    Use spread to make a shallow copy and modify
    an existing properties
*/


// *****************************************************

// Include new properties with copy
// Output: { a: 1, b: 2, c: 3 }
const obj4 = { a: 1, b: 2 };

console.log(copy)