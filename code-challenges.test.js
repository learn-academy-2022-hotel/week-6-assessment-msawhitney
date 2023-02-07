// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// Pseudocode
// Input: array of objects
// Output: array of strings 
// Process: Create a function called peopleText. 
// Create an empty array to hold strings - called peopleTextArray
// Access values in the object by using object.name, object.occupation. 
// Map through object creating a string interpolation using the values and adding result to array.  
//My initial code is below - it works but does not capitalize. --- TEST FAIL
//   const peopleText = (array) => {
//     let result = []

//     for (let i = 0; i < array.length; i++) {
//         result.push(`${array[i].name} is a ${array[i].occupation}`)
//         }
//         return result
//     }


// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe ('peopleText', () => {
  it ('Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.', () => {
expect(peopleText(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])  
  })
})

// JEST---RED --- FAIL
// ● peopleText › Create a function ...
// ReferenceError: peopleText is not defined


// b) Create the function that makes the test pass. This is a REFACTER.

const peopleText = (array) => {
  //Create an empty array to store the final result - array of strings
  let result = []
//iterate through the array
  for (let i = 0; i < array.length; i++) {
    //set "name" as elements of the array split at the space. 
    //Call the split elements "word" 
    //Map through and set each "word" to uppercase. 
    //Isolate the first letter of each word (slice) and join the words back together at the spaces. 
    let name = array[i].name.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    //Push the string interpolation using the variable "name" and the occupation property of the object into the array called "result" and return that result.
    result.push(`${name} is ${array[i].occupation}.`);
  }
  return result;
}

// ---GREEN ---Jest PASS
// peopleText
// ✓ Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)

// Note on REFACTOR: I added an "a" to my code where it didn't ask for it in the expected outcome. I tested it over and over again and could not see it!! I actually had found that before...when I had written the code initially and forgot to capitalize the names. I refactored to capitalize the names (much later) and then ran the test and COULD NOT SEE the "a" --even though it was pointing to it!!-- until finally I did!

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Pseudocode
// Input: array of mixed data 
// Output: subset of original array that contains only remainders of the numbers divided by 3
// Process: Create a function called onlyNumsdivided. Start with an empty array ("numbers"). 
//Use filter to iterate through each element - if element is a number, add it to "numbers" (test with typeof is number)
//Use map to iterate through the numbers and use modulo to see if they return a remainder when divided by 3. Return this subset array - "remainders"

// Refactor process:

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe ('onlyNumsdivided', () => {
  it ('Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.', () => {
expect(onlyNumsdivided(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])  
expect(onlyNumsdivided(hodgepodge2)).toEqual([ 2, 1, -1 ])    
  })
})

// JEST---RED --- FAIL
// ● onlyNumsdivided › Create a ...
// ReferenceError: onlyNumsdivided is not defined


// b) Create the function that makes the test pass.

const onlyNumsdivided = (mixedarray) => {
  //filter the input array by the following conditions: element type is a number. 
 const numbers = mixedarray.filter(element => typeof element === 'number');
 //add "numbers" to "subset" - use modulo to find those that have a remainder when divided by 3 
  const remainders = numbers.map(num => num % 3);
  //return the resulting array of remainders 
  return remainders;
};

// ---GREEN -----TEST PASS
// onlyNumsdivided
// ✓ Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// Pseudocode
// Input: array of numbers
// Output: sum of cubed numbers
// Process: declare a function called sumCubes. 
// Iterate through the array using map, cubing each number and adding this to "cubed"
// Found this resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//Use the reduce method to sum the cubed numbers in the array

// Refactor process:

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe ('sumCubes', () => {
  it ('Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.', () => {
expect(sumCubes(cubeAndSum1)).toEqual(99)  
expect(sumCubes(cubeAndSum2)).toEqual(1125)    
  })
})

// JEST---RED --- FAIL
// ● sumCubes › Create a function that takes in an array of numbers ...
// ReferenceError: sumCubes is not defined


// b) Create the function that makes the test pass.

//Declare a function called sumCubes that takes in an array of numbers
const sumCubes = (array) => {
  //create variable called "cubed", map through the array cubing each number
  let cubed = array.map(n => n ** 3);
  //return the array after using the reduce method to sum all numbers in the array. 
  //the sum is initially set to zero and then each element (number) is added to the total
  return cubed.reduce((total, num) => total + num, 0);
  };
//GREEN - PASS (see below)


  // ----GREEN ---- ALL 3 TESTS PASS

  // PASS  ./code-challenges.test.js
  // peopleText
  //   ✓ Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
  // onlyNumsdivided
  //   ✓ Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
  // sumCubes
  //   ✓ Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.