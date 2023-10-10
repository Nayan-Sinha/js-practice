// JavaScript is a dynamically typed language, which means that data types of variables are determined 
// by the value they hold at runtime and can change throughout the program as we assign different values to them.

// As we all know Datatypes are of two types, i.e Primitive and Non-Primitive

//Primitive Datatype: Numbers, Strings, Booleans, Symbols, Undefined, Null, BigInt

const score = 20            // a number type
const scoreValue = 20.5     // also a number, here float value also treated as number only
const isLoggedIn = true     //logged in variable whether to track a user is login or not. 

const temp = null           // means the temperature is empty, not 0.
let userEmail               // simply it is undefined

const id = Symbol('12')
const anotherId = Symbol('12')      // symbol datatypes
console.log(id === anotherId);

const bigNumber = 567657435464n     // so in BigInt you have to include n at last

/* ************************************************************************************************************************** */

// Non-Primitive Datatype: Array, Objects, Functions

const heroes = ["Shaktimaan", "Aryamaam", "JuniorG"]        // so it is ana Array

let myData = {
    name: "Nayan",
    age: 22,                    // so whatever is inside under curly braces are objects
    address: "Siliguri"
}

/* function(){} */            //so it's a definition of function

const myFunction = function(){
    console.log("Hello World");
}   

// here the function definition had been store into a variable

//Checking the datatypes

console.log(typeof score);              // datatype will be number
console.log(typeof scoreValue);         // datatype will be number                  
console.log(typeof isLoggedIn);         // datatype will be boolean
console.log(typeof anotherId);          // datatype will be symbol
console.log(typeof bigNumber);          // datatype will be BigInt
console.log(typeof heroes);             // datatype will be object



