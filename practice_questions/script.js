/*
1. Conditionals
2. Loops & Arrays
*/


// CONDITIONALS

// Create a function that accepts a number. If the number is greater than 9, console log that it a big number. If it is less than 9, console log that it is a small number

function bigOrSmall(num) {
    if (num > 9) {
        console.log("big number")
    }
    if (num <= 9) {
        console.log("small number")
    }
}

// bigOrSmall(4)
// bigOrSmall(7)
// bigOrSmall(24)

// Create another function that does the same thing as the previous, but it now also console logs that it is a medium number if it is greater than 3 but less than 9

function bigMedSmall(num) {
    if (num > 9) {
        console.log("big number")
    } else if (num < 3) {
        console.log("small number")
    } else {
        console.log("medium number")
    }
}

// Create a function that accepts a string. If the string matches the secret word "p@ssword", output "access granted" in the console. If the string does not match the secret word, output "access denied" in the console.

// 1. Get a string ✅
// 2. Compare string with password ✅
//  - use if else statement to compare argument with password ✅
// 3. Output correct message ✅
//  - if string matches password, log "access granted" ✅
//  - else output "access denied" ✅

function checkPassword(password) {
    if (password === "p@ssword") {
        console.log("access granted!")
    } else {
        console.log("access denied")
    }
}

// Sub Procedure - breaking down tasks into smaller tasks

// Create a function that accepts two arguments, a 'name' (string) and an 'age' (number). The function will output "name is age years old". But name and age should be replaced by the arguments so it should read something like "Jack is 16 years old" if the function got "Jack" and 16 as the two arguments

// Create a function that accepts two arguments, a 'name' (string) and an 'age' (number). If the age is over 18, output "name can buy bitcoin". If the age is under 18, output "sorry name, you can't buy bitcoin"



// LOOPS

// Create a function that accepts an array. It goes through the entire array and outputs all the elements inside the array to the console. For example, if the array is [1,2,3] the function should output all three numbers one by one in the console. If the function is ["hi", "bye"], it should output "hi" and "bye" one by one in the console.

const nums = [1,2,3]
const greetings = ["hi", "bye"]

function outputArray(array) {
    for (counter = 0; counter < array.length; counter++) {
        console.log(array[counter])
    }
}

// outputArray(nums)
// outputArray(greetings)

// counter = 3
// array.length = 3

// output 1
// output 2
// output 3

// Create a function that accepts an array of numbers. It searches the array to see if the number 7 exists. If it does, it will output "lucky!" in the console. If if the array doesn't have a 7, it will output "try again" in the console.

// 1. loop through array ✅
// 2. check if there is a 7 ✅
//  - create message variable ✅
//  - if statement to check if number is 7 ✅
//  - if 7 exists, then change the message to "lucky" ✅
//  - by default, message should be "try again" ✅
// 3. output the correct message ✅

const lottoNums = [5,3,6,1,2,7]

function checkLucky(array) {

    let message = "try again" 
    
    for (c = 0; c < array.length; c++) {
        if (array[c] === 7) {
            message = "lucky!"
        }
    }

    console.log(message)
}

checkLucky(lottoNums)

// message = "lucky"
// c = 6
// array length = 6

// OUTPUT

// Create a function that accepts an array of numbers. It counts how many numbers are greater than 5 and outputs the total at the end. For example, if you give the function an array of [1,4,9,2,7], it will output 2 in the console because only 9 and 7 are greater than 5. If you give the function an array of [5,6,1], it will output 1 because only 1 of the numbers is greater than 6.

// Create a function that does the same as the previous function, but now also counts how many small numbers there are. If you give the function an array of [1,4,9,2,7], it will output "2 big numbers", and "3 small numbers" on separate lines.

// Create a function that accepts an array of numbers and outputs the average (add all numbers and divide by total amount of numbers). For example, if the array is [2,5,3,6], the output will be 4.

// Create a function that accepts an array of numbers. It will output the highest number in the array, and also the lowest. For example, if the array is [5,2,6,9,1,3], it will output HIGHEST is 9 and LOWEST is 1.

// Create a function that takes an array. The function should reverse the array, and return the result. For example, [1,2,3] will become [3,2,1]. You will need to use Array.pop() and Array.push().

// Create a function that takes a number array. It will double the values of each number in the array and return the new doubled array. For example, [1,2,3] will become [2,4,6].

// Create a function that accepts a string as a 1st argument, and an array of names as the 2nd argument. It will search if the string (1st argument) exists in the array of names (2nd argument). If it exists, output the index of the array where it was found. If it does not exist, output "404 not found!".    