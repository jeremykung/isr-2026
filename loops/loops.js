// 1. While
// 2. For Loops

// While Loops
// repeats until condition is NOT true

let laptopBroken = true

while (laptopBroken === true) {
    console.log('oh no')
    console.log('CJ is gonna struggle')
    laptopBroken = false
}

let counter = 0

while (counter < 10) {
    counter = counter + 1
    console.log('counter is now', counter)
}

// Create a while loop that counts down from 100
// it should work like the above, but some sort of counter should go from 100 and count to 0
// At the end of the loop, console.log("DONE!")

let number = 100

while (number >= 0) {
    console.log('number is', number)
    if (number === 0) {
        console.log("DONE!")
    }
    number = number - 1
}

// For Loops
// We want to repeat something x number of times

for (let i = 0; i < 10; i++) {
    console.log('look ma! a loop!')
}

for (j = 0; j < 4; j++) {
    console.log('repeats 4 times!')
}

for (k = 100; k > 0; k--) {
    console.log('k is', k)
}

// "i++"" is the same as "i = i + 1"

// parseInt()
// converts strings to numbers
// takes a string as an argument, and returns it as a number
const x = parseInt("8717")
console.log(x)

// "1" ❌
// 1   ✅

// Create a factory that creates x number of _____
// The website should prompt the user for a number when they click a button. The user will input a number and then in the console, they will see their _____ being created many times through the console
// ex. Welding the metal
// ex. Joining arm
// ex. Painting...

function produce() {
    const amount = prompt("how many sushis u want?")

    //   create var | condition       | do after loop
    for (counter = 0; counter < amount; counter++) {
        console.log('make rice')
        console.log('add sushi vinegar')
        console.log('add discount salmon from store')
        console.log('package nicely')
    }

}






// Looping over Arrays
const friends = ["Vivian", "Ash Ketchup", "Tomer", "Armanda"]

console.log(friends.length)

// How do I do something for each element in an array?

for (i=0; i<friends.length; i++) {
    console.log("I do have friends I promise, one is,", friends[i])
}

// Create a new array of fruits. 🍉
// When a user pushes a button, a prompt commes up
// Whatever they type will be added to fruits using Array.push()
// Inside the same function for the button push, print out all the fruits that are now in the array
// ⭐ BONUS make a button to remove fruits and reprint the list
