/*
1. If
2. Else
3. Else If

COMPARISON OPERATORS
>   greater than
<   less than
>=  greater or equal to
<=  less than or equal to
==  equal to
=== equal to STRICT (compares value and data type)

&&  AND condition
||  OR condition

*/

let x = 7
x = 6       // one "=" sign ASSIGNS a value

// If 

if (3 === '3') {
    console.log('yes')
}

// Else
const student = 'tor'

if (student === 'tammy') {
    console.log('bean bag')
} else {
    console.log('chair')
}

// Create an if else statement that checks if age is over 18. if age is over 18, console.log('can drink'), else console.log('juice')

let age = 16

if (age < 18) {
    console.log('juice')
} else {
    console.log('can drink')
}

// Else If

if (age >= 18) {
    console.log('can drink')
} else if (age < 3) {
    console.log('milk')
} else if (age === 4) {
    console.log('chocolate milk')
} else {
    console.log('juice')
}

// Get Info from User
const food = prompt("how italian is the food?")

// '&&' lets you have TWO conditions
if (food > 5 && food < 8) {
    console.log('mid party')
}