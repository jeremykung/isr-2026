/*

1. What are arrays ✅
2. Initializing an array ✅
3. Accessing elements in an array ✅
4. Mutating an array ✅
5. push() & pop() 

*/

const name = "Emils"        // Strings
const age = 16              // Numbers
const isGraduated = false   // Boolean

// Arrays are lists of values
// Initialize array with []
// use commas to separate values
const students = ["Siff", "CJ", "Tor", "Anars"]
const scores = [95, 80, 72, 84]
const userData = ["Tammy", 16, false]

console.log(students)

// Access element from array
console.log(students[2])
console.log(students[3])
console.log(scores[3])

// Create an array of your worst enemies
// Log out all of them in a message that says
// My enemy is ______

userData[1] = 17
console.log(userData)

const pizzaToppings = []

// Array.push() Add something to an array
pizzaToppings.push("Salami")
pizzaToppings.push("Mushrooms")
pizzaToppings.push("Pinapple")

// Array.pop() Remove the last element in an array
const exToppingOne = pizzaToppings.pop() // retruns Pineapple
const exToppingTwo = pizzaToppings.pop() // returns Mushrooms

pizzaToppings.push("Pepperoni")

// prompt("New Task:")


/* 

CHALLENGE

// Create an array of tasks with 2 tasks in it. Have a button that prompts the user for a new task, adds it to the new array, then logs the new array to the console.
// 🔥 BONUS, add a delete button that removes items from your task list

Hint 🤧👼

1. Create an array called tasks and initialize it with two string values
2. Create a button in HTML that calls a function "addTask()" when it is clicked
3. Define the addTask() function
    - Create a variable called newTask and set it equal to a prompt() that asks the user for a task
    - Add the newTask to the array using the push() method
4. Log the tasks array to console

*/

// Array Length
const colours = ["blue", "purple", "pink", "yellow"]
colours.push("blue")
console.log(colours.length)

// Create an array of sushi ingredients
// It should be empty at the start
// A user can push a button to add sushi ingredients
// The button makes a prompt, saves it to a variable, and pushes it into the array
// If the sushi ingredients are over 4, you should not be able to add it to the ingredients
// Instead, it would alert and say "you are ruining sushi"
// If it does get added, then console log the ingredient you just added
// BONUS make it so you can remove ingredients with a button (Hint, use Array.pop())

const sushiIngredients = []

/*

CHALLENGE
Array Reader Function 📖
Create a function that takes an array as an argument. It will tell the user what the first and last element in the array are, and how many elements there are

// Hint
1. Create your function and define one parameter for your array
2. Console log the first element of the array
3. Console log the last element of the array (use array.length - 1)
4. Console.log the length of the array using array.length
*/