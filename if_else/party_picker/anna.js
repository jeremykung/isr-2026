const food = prompt ("how italian is the food (1-10) ") 
const drinks = prompt ("how much drinks are there are there per person? (1-5)") 
const people = prompt ("how many people are coming? ") 

const score = (food * drinks * people) 

if (score > 75 && score < 100) { 
    console.log ("maybe go if ur bored") 
} else if (score <75) { 
    console.log ("don't go") 
} else { 
    console.log ("definetly go") 
}