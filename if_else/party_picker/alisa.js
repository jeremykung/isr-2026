/*
1. If
2. Else
3. If Else
*/

//if (condition)
if (true) {
    console.log('success')
}

/*
let t = 291
let answer = 295
if (t + 4 = answer) {
    console.log('yippee!!')
}
*/

if (false) {
    console.log('hi')
}

//COMAPRISONS
/*
> greater than
< less than
>= greater than or equal to
<= less than or equal to
== equals/comparison (one = means assigning variable; compares value)
=== can also do that (but this one is strict; compares value and data type) (always go with this)
*/

if (9 < 2) (
    console.log('yes')
)

let t = 291
if (t - 50 == 241) {
    console.log('yippee!!')
}

let h = 189
if (h + 31 == 220) {
    console.log('hopperssss')
}

// ===

if (3 == '3') (
    console.log('yes')
) //will print yes

//as opposed to:

if (3 == '3') (
    console.log('yes')
)
//comapres value and DATA TYPE, so will not print anything

//~~~~~~~~~~~~~IF ELSE~~~~~~~~~~~~~~~

const student = 'Tammy'
if (student === 'Tammy') {
    console.log('bean bag')
} else {
    console.log('chair')
}

//create an if/else statement that checks if age is over 18
// if age is over 18, console log 'can drink'
//if else, console log 'juice'

let age = 16
if (age === 18) {
    console.log('can drink')
} else {
    console.log('arrest for fake id use')
}

//ELSEIF
age = 21
if (age >= 18) {
    console.log('can drink')
} else if (age < 3) {
    console.log('milk')
} else {
    console.log('juice')
}

//PROmpts (get info from user)

const food = prompt("How Italian is the food?")

let score = 7
if (score > 5 && score < 8) (
    console.log("dead party")
)



//~~~~~~~~~~~~~~~ PARTY RATER ~~~~~~~~~~~~~~~~~~~~~

console.log("Please rate the following with a score from 1-5!")
//1. Food
const PartyFood = prompt("How content are you with eating Chipotle Ranch Cheerios?")
//2. Drinks
const PartyDrinks = prompt("How hard do you want Polmos Spirytus Rektyfikowany Vodka to hit the spot?")
//3. Location
const PartyPlace = prompt("How excited are you to attend the party in my deceased grandpa's abandoned basement?")
//4. Music 
const PartyMusic = prompt("How devoted are you to the great anthem of Baby Shark?")
//4. People
const PartyPeople = prompt("How antisocial are you?")
// 5. Party
const PartyPooper = prompt("How much do you even like parties?")

PartyScore = PartyFood * PartyDrinks * PartyPlace * PartyMusic * PartyPeople * PartyPooper

if (PartyScore >= 100) {
    console.log("LEAVE YOUR FAMILY BEHIND, COME AND JOIN US ON THE RIDE!!!!")
} else if (PartyScore <=80) {
    console.log("Yeah, it's solid. You should come!")
} else if (PartyScore <=50) {
    console.log("Bro, what are you doing? This party is hella mid.")
} else if (PartyScore >49) {
    console.log("Nah, bro. I dunno, go if you want to.")
} else {
    console.log("F*ck this sh*t, stay at home and play Pokemon.")
}
