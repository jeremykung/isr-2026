/*
1. If
2. Else
3. If else
*/

 /*
 Comaparisons
 > greater then
 < less then
 >= greater or equal to
 >= less then or equal to
 == equal to
 === equal to strict (compares value and data type)
 3 --> number 3
 "3" --> string 3
 */ 



if (true){
    console.log("succes!")
}

if (false) {
    console.log("hi!")
}

if (5 > 2) {
    console.log('yes')
}

if (10 < 3) {
    console.log("S")
}

let x = 7
x = 6 // one "=" sign assigns a value, and "==" is comparisons

// == checks value only
// === checks value AND data type
if (x == 5) {
    console.log ("YES")
}

// If Else
const student = "Tammy"

if (student === "Tammy") {
    console.log ("Bean bag")
} else {
    console.log ("chair")
}

if (student === "Tor") {
    console.log ("Bean bag")
} else {
    console.log ("chair")
}

// create an if else statement thatchecks if age is over 18
// if age is over 18, console.log ('can drink'), else console.log('juice')

let age = 16
if (age < 18) {
    console.log('can drink')
} else {
    console.log('juice')
}

// if else 

if (age >= 18) {
    console.log("can drink")
}else if (age < 3) {
    console.log("milk")
} else if (age === 4){ 
    console.log("chocolate milk")
} else {
    console.log("juice")
}







const food = prompt ("How italian is the food?")

if (food > 1 && food < 3) {
    console.log("mid party")
} else if (food == 4 ) {
    console.log("GO!")
} else if (food == 5 ) {
        console.log("GO!")
    } else {
    console.log("Stay home!")
}


const people = prompt("How many people are there?")

if (people >= 0 && people < 2) {
    console.log("Nahh, don't go.")
} else if (people >= 3 && people <= 4) {
    console.log("Could be better.")
} else if (people >= 5) {
    console.log("GO for sure!")
} else {
    console.log("stay home")
}

const music = prompt ("How much does the music at the party rely to your music taste ")

if (music >= 0 && music < 2) {
    console.log("Don't go!")
} else if (music >= 2 && music < 3) {
    console.log("Maybe, it's your choice.")
} else if (music >= 3 && music <= 5) {
    console.log("You should go for sure!!")
} else {
    console.log("Stay home!")
}

const totalScore = food * people * music

if (totalScore >= 100) {
    console.log("go to this party")
} else if (totalScore >= 80 && totalScore < 100) {
    console.log("You should consider going")
} else if (totalScore >= 50 && totalScore < 80) {
    console.log(" it might not be the best")
} else {
    console.log("Skip it")
}

