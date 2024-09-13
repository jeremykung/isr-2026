/*

1. What Are Functions?
2. Function Definitions
3. Function Calls
4. Parameters
5. Arguments

*/

// Function Definition
function makePumpkinSoup() {
    console.log('nunc the nulla')
    console.log('donec diktum')
    console.log('nunc more nullas')
}

// Call the function
makePumpkinSoup()

// Create your own function that is a new recipe
// Call it twice

// Parameters
// Are like variables that the function can use
// Can only be used in the function

function sayHi(person) {
    console.log('hi ' + person)
}

// Arguments are the values that you give the parameter
sayHi('Nat')    // Here the argument is "Nat"
sayHi('Anna')   // Here the argument is "Anna"

// You can define more than 1 parameter
// Below we have two, "greeting", and "person"
function greet(greeting, person) {
    console.log(greeting + ' ' + person)
}

greet('yo', 'Dom')      // Arguments > "yo", "Dom"
greet('sup', 'Tomer')

function add(x, y) {
    const result = x + y
    console.log('answer is ' + result)
}

add(5, 2)
add(7, 8)

// Make a function for subtracting
// Make a function for multiplying

// Function that checks if student is graduated or not (over 18)
function isGraduated(age) {
    if (age >= 19) {
        console.log('yes, they graduated')
    } else {
        console.log('no, they are not graduated')
    }
}

isGraduated(20)
isGraduated(15)

// Alter the function above so that it also accepts a "STUDENT" parameter.
// It should use it to say "yes, STUDENT has graduated"

// STORE
let wallet = 100

const headphone = 25
const water = 4
const wheat = 15
const bear = 5

// Create a function that changes your wallet value
    // The function should have a paremeter with what you are buying
        // ex. bear
    // The function should deduct the bear price from your wallet price
    // The wallet should then be equal to the remaining value
    // Console log the following at the end of the function
        // You spent ___ money
        // You have ___ left in your wallet

function spendMoney(item) {
    // set wallet value to its current value, minus the item value
    wallet = wallet - item
    console.log('you spent', item, 'dollars')
    console.log('you have', wallet, 'left')
}

