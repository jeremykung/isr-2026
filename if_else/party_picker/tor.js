

let x = 6000

x = 10

if (x == 10) {
    console.log("x")
}


/* 
< greater than
> lesser than
>= greater or equal to
<= lesser then or equal to
== equal to
=== equal to (strict) compares value and data types
*/




const drinkingAge = 18
const studentName = prompt("Whats your name? ")
const studentAge = prompt("how old are you? ")


console.log("Survey participant name: " + studentName)

console.log("survey participant age: " + studentAge)


if (studentAge >= drinkingAge) {
    console.log(studentName + " can drink since he is " + studentAge)
} else {
    console.log(studentName + " is not allowed to drink cause he is " + studentAge)
}

// else if




//prompts get info from user




  
const musicRating = prompt("How did you like the music at the party out of 5-? ")

if (musicRating >= 3 && musicRating < 5) {
    console.log("great music")
} else if (musicRating == 5) {
    console.log("perfect music")
} else if (musicRating <= 2.5) {
    console.log("mid music")
} else {
    console.log("sigma")
}


const vibeRating = prompt(" How did you think the vibe was at the party out of 5-?")

if (vibeRating>= 3 && vibeRating < 5) {
    console.log("great vibe")
} else if (vibeRating == 5) {
    console.log("perfect vibe")
} else if (vibeRating <= 2.5) {
    console.log("mid vibe")
} else {
    console.log("sigma")
}

const foodRating = prompt(" How was the food out of 5-? ")

if (foodRating>= 3 && foodRating < 5) {
    console.log("great food")
} else if (foodRating == 5) {
    console.log("perfect food")
} else if (foodRating <= 2.5) {
    console.log("mid food")
} else {
    console.log("sigma")
}


const totalScore = parseInt(vibeRating) + parseInt(musicRating) + parseInt(foodRating);

console.log(totalScore)

if (totalScore >= 12 && foodRating <15) {
    console.log("That was a freaky good pary")
    
} else if (totalScore >= 6 && totalScore <= 11) {
    console.log("That was a mid party ")
} else if (totalScore <= 5) {
    console.log("That pary sucked ")
}


console.log("Avarage survey rating: " + totalScore / 3 + " out of 5")

