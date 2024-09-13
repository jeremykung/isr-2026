if (true) {
    console.log('success!')
}
if (false) {
    console.log('hi')
}
/*
> greater than
< less than
>= <= greater/less or equal to
== equal to (loose)
=== equal to (strict) - compares value and data type
*/

let x = 7
x = 6 // one = assigns the value
if (x == 6) {
    console.log('yes')
}
if (3 == '3') {
    console.log('loose')
}
if (3 === '3'){
    console.log('strict')
}

const student = 'brenner'
if (student === 'dom') {
    console.log('me')
} else {
    console.log('patootie')
}

let age = 17
if (age >= 18) {
    console.log('can drink')
} else {
    console.log('juice for you buddy')
}

if (age >= 18) {
    console.log('can drink')
} else if (age < 3) {
    console.log('milk')
} else {
    console.log('cocacola')
}

// get info from user by var = prompt(question)
// && lets you have two conditions in an if statement

//party rating for mark

const music = prompt('The song playing at the party is CARNIVAL by Kanye West. Rate this song 1-5')
const people = prompt('Brenner is at the party. Rate 1-5 how fun he is')
const food = prompt('Pizza just arrived at the party. Do you like pizza (1-5)?')

let score = music * people * food
if (score >= 80) {
    console.log('Run to the party, its amazing!')
} else if (score >= 64 && score < 80) {
    console.log('mid party, might go')
} else if (score >= 20 && score < 64) {
    console.log('meh, go do something else')
} else {
    console.log("DONT GO PLEASE NO")
}