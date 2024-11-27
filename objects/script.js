// Objects

// this way is silly since all data is related
const carYear = 2013
const carMake = "BMW"
const carDrive = 2
const carMiles = 500000

// objects lets you group data together into 1 variable
const car = {
    // properties
    year: 2003, 
    make: "Toyota",
    miles: 300000,

    // methods (functions that belong to the object)
    drive() {
        console.log("Car is driving")
    },
    describe() {
        console.log("this", this.make, "has driven", this.miles, "miles")
    }
}

// You can access Object properties like so:
console.log(car.make)
console.log(car.year)

// You can call methods on your Object like so:
console.log(car.describe())
console.log(car.drive())

// PRACTICE
// Create your own object for your dreamCar
// it should have 5 properties and 2 methods
// test out your object to see if you can access properites and methods

// Object
const brenner = {
    height: 290,
    hair: "short",

    code() {
        console.log('student is coding...')
    },
    study() {
        console.log('student is studying...')
    }
}

// Class
class Student {
    
    // properties
    constructor(givenHeight, givenHairstyle, givenName) {
        this.height = givenHeight,
        this.hair = givenHairstyle,
        this.name = givenName
    }

    // methods
    study() {
        console.log(this.name, 'is studying')
    }
    sleep() {
        console.log(this.name, "slept for 100 hours and grew their", this.hair)
    }
}

const siff = new Student(165, "ponytail", "Siff")
const nat = new Student(170, "long", "Nat")
const emils = new Student(178, "belieber", "Justin")

// Create your own class for Robots
// Give it some properties and a couple default methods
// Create 2 more robot objects using the class

// Audio Objects
const songOne = new Audio("songOne.mp3")

















// class Student {
//     constructor(studentName, studentGrade) {
//         this.name = studentName
//         this.grade = studentGrade
//         this.school = "ISR"
//     }

//     study() {
//         console.log(this.name, "is studying")
//     }
//     levelUp() {
//         this.grade++
//         console.log(`${this.name} is now in grade ${this.grade}`)
//     }
// }

// const tomer = new Student("Tomer", 11)