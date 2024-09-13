/*
1. if
2. else
3. if else */
/*if (true){
    console.log('success!!')
}

if (false) {
    console.log ('hi!!!!!')
}*/


/*if (5>2){
    console.log('yes!:D')
}
let x=7
x = 6  
// one "=" sign assins to value*/

/*if (3 === 3) {
    console.log('yes')
} 
//if else
const student = 'tammy'

if (student === 'tammy') {
    console.log('bean bag')
} else {
    console.log('chair')
}
//create an if else statement that checks if age is over 18
// if age is over 18 , console.log ('can drink'), else console.log ('juice')
*/
/*let age = 16
if (age >= 18) {
    console.log('can drink')
} else if (age<3) {
    console.log('milk')
} else if (age===4){
    console.log ('juice')
} 
*/
//get info from user
/*const food = prompt ("how italian is the food")
let score=7
// '&&' lets you have two conditions
if (score > 5 && score < 8) {
    console.log('mid party')
}
*/
 
 let musicRating = parseInt(prompt("Rate the music (1-5):"));
 let crowdRating = parseInt(prompt("Rate the crowd (1-5):"));
 let foodRating = parseInt(prompt("Rate the food (1-5):"));

 
 let totalScore = musicRating * crowdRating * foodRating;

 // Output a message based on the score range
 if (totalScore >= 100) {
     console.log("This party is unmissable! You MUST go.");
 } else if (totalScore >= 80 && totalScore < 100) {
     console.log("Sounds like a pretty good party, you should consider going.");
 } else if (totalScore >= 50 && totalScore < 80) {
     console.log("It's an okay party, maybe go if you're bored.");
 } else {
     console.log("This paty is ew.You CANT go..");
 }