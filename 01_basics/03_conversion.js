
/***************************************** CONVERSIONS *******************************************/

let score = 52
let score1 = "522abc"
let score2 = null
let score3 = undefined
let score4 = true
let score5 = "nayan"

console.log(typeof score);  // normally to see the what type of data it is
console.log(typeof(score));  // this syntax is method

/*
    in both the way we can execute
*/

let valueInNumber = Number(score)   // to be very specific with numbers
console.log(typeof valueInNumber);  // this line of code will show the type of data
console.log(valueInNumber);         // here the value you will get 52


let valueInString = String(score1)   // to be very specific with strings
console.log(typeof valueInString);  // this line of code will show the type of data
console.log(valueInString);         // here the value you will get 522abc


let valueInNumber = Number(score2)   
console.log(typeof valueInNumber);      // this line of code will show the type of data
console.log(valueInNumber);             // here the value you will get 0


let valueInNumber = Number(score3)   
console.log(typeof valueInNumber);      // this line of code will show the type of data
console.log(valueInNumber);             // here the value you will get NaN


let valueInNumber = Number(score4)   
console.log(typeof valueInNumber);      // this line of code will show the type of data
console.log(valueInNumber);             // here the value you will get 1 as it is true state; if it is false, then it will be 0


let valueInNumber = Number(score5)   
console.log(typeof valueInNumber);      // this line of code will show the type of data
console.log(valueInNumber);             // here the value you will get NaN



let isLoggedIn = 1              // we can write isLoggedIn or Scor6 (choice is yours)

let booleanIsLoggedIn = Boolean(isLoggedIn)    // to be very specific with Boolean
console.log(typeof booleanIsLoggedIn);      // this line of code will show the type of data
console.log(booleanIsLoggedIn);         // here the value you will get true, if 0 then it will be false


let isLoggedIn = ""              // if we convert "" (this is call empty string.)

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);      // this line of code will show the type of data
console.log(booleanIsLoggedIn);         // here the value you will get false


let isLoggedIn = "nayan"              // if we convert filled string

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);      // this line of code will show the type of data
console.log(booleanIsLoggedIn);         // here the value/output you will get true


let anyNumber = 45                          // if we convert any number to string
let stringAnyNumber = String(anyNumber)     // code conversion syntax
console.log(typeof stringAnyNumber);        // this line of code will show the type of data
console.log(stringAnyNumber);               // here the value/output you will get 45


// to execute these codes kindly use comment specific wise //



