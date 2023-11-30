const inputArray = [-1,-2,0,1,2,3]

//////////////////PROBLEM 1////////////////////

// Make a variable called firstItem, set to the first value of the array called 'inputArray'.
// Test your code by printing this new variable.

const firstItem = inputArray[0];
// console.log(firstItem)

//////////////////PROBLEM 2////////////////////

// Make a variable called arrayLength, set to the length of inputArray.
// Test your code by printing this new variable.

const arrayLength = inputArray.length
// console.log(arrayLength)


//////////////////PROBLEM 3////////////////////

// Make a variable called lastItem, set to the last item of inputArray.
// Test your code by printing this new variable.

const lastItem = (inputArray[inputArray.length -1]);
// console.log(lastItem);

//////////////////PROBLEM 4////////////////////

// Add the number 4 to the end of inputArray.
// Test your code by printing inputArray.

inputArray.push(4);
// console.log(inputArray);

//////////////////PROBLEM 5////////////////////

// Remove the last item of inputArray.
// Test your code by printing inputArray.

inputArray.pop();
// console.log(inputArray);



//////////////////PROBLEM 6////////////////////

// Remove the first item of inputArray.
// Test your code by printing inputArray.

inputArray.shift();
// console.log(inputArray);


//////////////////PROBLEM 7////////////////////

// Replace the first and last item in inputArray with the number 42.
// Fear not: the array will be at least 2 items long.
// Test your code by printing inputArray.

inputArray.splice(0, 0, 42);
inputArray.splice(-1, 1, 42);
// console.log(inputArray);


//////////////////PROBLEM 8////////////////////

// Using a for...of loop, add ten to each element in inputArray and then push each sum into the newArr array.
// You can assume that all items in inputArray will be numbers.
// For example:
// addTen([10,20,30]); -> [20,30,40]
// addTen([1,2,3,4]); -> [11,12,13,14]
// Test your code by printing inputArray.

let newArr = [];
 for (let num of inputArray){
    // console.log(i)
    newArr.push(num + 10)
 }
 console.log(newArr);
 //////////////////PROBLEM 9////////////////////

// Fill the numbers1 array with numbers 0-31.
// Test your code by printing numbers1.

let numbers1 = [];
for (let i =0; i <= 31; i++){
 numbers1.push(i)
}
console.log(numbers1);



//////////////////PROBLEM 10////////////////////

// Fill the numbers2 array with even numbers 0-20.
// Test your code by printing numbers2.

let numbers2 = [];
for(let i =0; i <=20; i = i + 2){
numbers2.push(i)};
console.log(numbers2);



//////////////////PROBLEM 11////////////////////

// Fill the numbers3 array with numbers from 10 to 1 in descending order.
// Test your code by printing numbers3.

let numbers3 = [];
for (let i=10; i>=1; i--){
    numbers3.push(i);
}
console.log(numbers3)


//////////////////PROBLEM 12////////////////////

// Using a for loop, fill the newArray1 with the elements of inputArray, in reverse order.
// Test your code by printing newArray1.

let newArray1 = []; 
for (i = 0; i < inputArray.length; i++){
   newArray1.unshift(inputArray[i])
}
console.log(newArray1)




//////////////////PROBLEM 13////////////////////

// Inside the function below, search inputArray for the givenValue (which could be any number).
// If the array contains the value, set valueFound to true. Otherwise, set valueFound to false.
// Test your code by printing foundValue.

let givenValue = 1 // CHANGE ME!! to any number
let foundValue //we've declared foundValue for you... you'll set it to true or false, below

foundValue = (inputArray.includes(givenValue));

console.log(foundValue);


//////////////////PROBLEM 14////////////////////

// In this problem, myNumArray is an array of numbers. 
// loop through myNumArray and add each number to newArray2, until you get to a negative number.
// When you get to a negative number, stop. Do not add any more numbers to newArray.
// For example:
// if myNumArray is [5, 2, 9, -4, 8, -3, 1]
// newArray2 will be [5, 2, 9]
// Test your code by printing newArray2.

let myNumArray = [1, 60, 44, -3, -20, 90] // Feel free to change me!
let newArray2 = [];

for (let i = 0; myNumArray[i] >= 0; i++){
    newArray2.push(myNumArray[i])
}

console.log(newArray2)