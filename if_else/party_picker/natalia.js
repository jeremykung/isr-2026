/*
1. If
2. Else
3. If Else

Comparisons
> greater than
< less than
>= greater than or equal to
< less than or equal to
== equal to ( whenever it is a comparison, we need two uqual signs)
=== equal to (strict: compares value and data type)
*/

//IF
if (true) {
    console.log(" succes! ")
}
if (false) {
    console.log(" hi " )
}
if (5 > 2) {
    console.log("yes")
}
let x = 7
x = 6             // one "=" sign ASSIGNS a value
if (x == 6) {
    console.log("yes")
}
if (3 == "3") {
    console.log("yes")
}

//IF ELSE
const student = "tammy"

if (student === "tammy") {
    console.log('bean bag')
} else {
    console.log('chair')
}

//Create an if else statement that checks if age is over 18
//if age is over 18, console.log('can drink'), else console.log('juice')

let age = 16
if (age >= 18) {
    console.log('can drink')
} else {
    console.log('juice')
}

//ELSE IF   (you can put as many as you want)

if (age >= 18) {
    console.log('can drink')
} else if (age < 3) {
    console.log('milk')
} else {
    console.log('juice')
}

//Get info from User

// const food = prompt("how italian is the food")
// if (score > 5 && score < 8) {
  //  console.log('mid party')
// }

//Practice

let food = prompt("how italian is the food")

let drinks = prompt('how cold are the drinks')

let people = prompt('how many people are coming')

let score = (food * drinks * people)

if (score> 75 && score < 100) {
    console.log ("maybe go if you're bored")
} else if (score < 75) {
    console.log ("don't go, bad party")
} else {
    console.log ("definetely go")
}

