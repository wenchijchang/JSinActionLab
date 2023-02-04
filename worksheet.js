"use strict";

// Variable
//Task1 dayOfWeek
let dayOfWeek = "Monday"
console.log(dayOfWeek);
dayOfWeek = "Friday"
console.log(`I can't wait for ${dayOfWeek}`);

//Task2 userInput
    let animalInput = prompt("What is your favorite animal?")
    let colorInput = prompt("What is your favorite color")
    console.log(`I've never seen a ${colorInput} ${animalInput}!`);

// Conditionals
// Task 1 Meals coffee, ramen, korean BBQ 
let timeOfDay = 1300
let whatToEat = ""
if (timeOfDay < 1200){
    let whatToEat = "coffee"
    console.log(`Time to have ${whatToEat}`)
} else if(timeOfDay >= 1200 && timeOfDay <= 1700){
    let whatToEat = "ramen"
    console.log(`Time to have ${whatToEat}`);
} else {
    let whatToEat = "korean BBQ"
    console.log(`Time to have ${whatToEat}`);
}
    
//Task 2 Random number
let randomNumber = Math.floor(Math.random() * 11)
if (randomNumber >=0 && randomNumber <=2) {
    console.log("Beatles");
} else if(randomNumber >=3 && randomNumber <= 5){
    console.log("Stones");
} else if(randomNumber >=6 && randomNumber <= 8){
    console.log("Floyd");
} else if(randomNumber === 9 || randomNumber === 10){
    console.log("Hendrix");
}

// For loops
// Task 1
for (let index = 0; index < 7; index++) {
    console.log("JavaScript is cool!")   
}

//Task 2
for(let i = 0; i < 11; i++){
    console.log(i)
}

//Task 3
for(let i = 0; i < 5; i++){
    console.log("hello\ngoodbye")
}

// Functions
// Task 1 Favorite Movie (void functions)
function printMovieName(){
    let favoriteMovie = "Inception"
    console.log(favoriteMovie)
}
printMovieName()

// Task 2 Favorite Band (return functions)
function printFavoriteBand(){
    let result = prompt("What is your favorite band?");
    return result;
}
let favoriteBand = printFavoriteBand()
console.log(favoriteBand)

// Task 3 Concert (parameters)
function concertDisplay(musicalAct){
    let myStreet = prompt("Please enter the street you live")
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`)
}
concertDisplay("Backstreet Boys")

// Arrays
// Task 1:Desktop Items
let desktopItems = ["Plant", "mug", "lamp"]
console.log(desktopItems[1])
desktopItems.push("Infinity Gauntlet");
for(let i = 0; i < desktopItems.length; i++){
    console.log(desktopItems[i])
}

// Bonus Task
// Task 1
let magicNumber = 50
let guess = 0
while(guess != 50){
    let guess = parseInt(prompt("Guess a number"))
    if(guess === 50){
        console.log(`${guess}, Congratulations!`);
        break
    } else if(guess >= 40 && guess <= 60){
        console.log("Getting warmer!");
    } else if(guess < 50){
        console.log("Too low!");
    } else if(guess > 50){
        console.log("Too high!");
    }
}

// Task 2
let magicNumber = Math.floor(Math.random() * 101)
let guess = 0
while (guess != magicNumber) {
  let guess = parseInt(prompt("Guess a number"));
  if (guess === magicNumber) {
    console.log(`${guess}, Congratulations!`);
    break;
  } else if (guess >= magicNumber - 10 && guess <= magicNumber + 10) {
    console.log("Getting warmer!");
  } else if (guess < magicNumber) {
    console.log("Too low!");
  } else if (guess > magicNumber) {
    console.log("Too high!");
  }
}
