// Making a shallow copy of an array
const original = [1, 2, 3, 4, 5, 6];

// slice method
// const copy = original.slice()

// slice a portion 
// const copy = original.slice(2, 4)


// spread operator
// const copy = [...original]


// *****************************************************


// Concatenating arrays
const arr1 = [1, 2];
const arr2 = [3, 4];

/* 
  Use the spread operator to concatenate (or 
  combine) the two arrays.
*/

// const copy = [...arr2, ...arr1]



// *****************************************************


// Adding elements to an array
const arr3 = [1, 2, 3];

/*
    Use the above array and the spread operator to create
    a shallow copy and add the numbers 4 and 5 to the end
    of the copy.
*/

// const copy = [...arr3, 4, 5]


// *****************************************************

// FINALLY SOLVING THE PASS BY REFERENCE ISSUE

/* 
    Pass a shallow copy of the following array to 
    a function, double, that doubles each element in a for loop
*/

const arr4 = [1, 2, 3];

function double(arr){
  for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index] * 2
  }
  return arr
}

const copy = [...arr4]
double(copy)


// console.log(copy)