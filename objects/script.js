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

// Object Literal


// Object Constructor
function Store()