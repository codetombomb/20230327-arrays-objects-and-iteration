// Pass-by-value

/* Deliverables
1. Create a variable (myString) and assign it a starting value of 
"This string".
2. Create a function, changeString, that accepts an argument 
    of a string and adds " is modified!" to the end of the passed
    in string. The funciton should console.log the modified arg before 
    completing.
3. Inspect the original variable to see how it was affected
*/


const myString = "This string"


function changeString(str){
    str += " in modified!"
    console.log(str)
}

changeString(myString)











// Pass-by-reference
/* Deliverables
1. Create a variable, nums, and assign it the value of an array. 
2. Create a function, addToArray, that accepts an argument of an 
    array. Push a new value into the array and console.log the updated
    array before completing.
3. Inspect the original variable to see how it was affected
*/


const nums = [1,2,3]

function addToArray(arr){
    arr.push(4)
    console.log(arr)
}

addToArray(nums)



