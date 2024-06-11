"use strict"; // treat all JS code as newer version

// alert("Hello") // only run in browser

// console.log(9+9)

// console.log('Error')

let name = 'vikash'
let age = 19
let isLoggedIn = false


// number => 2 to power 53
// bigint
// string => "" ,''
// boolean => true/false
// null => standalone value ()
// undefined => 
// symbol => unique 

// object

// console.log(typeof undefined) // Output = undefined 
// console.log(typeof null) // output = object


// ******************* summary *****************

// 1. Primitive Data Types

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.9

let userMail; // undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 333333333333333333333333333555555556n

// console.log(id==anotherId);


//  2. Reference (Non Primitive)

// Array, Objects, Functions 

const heros = ["shaktiman","naagra","doga"]
let myObj={
    name:"vikash",
    age:22
}

const func = function(){
    console.log('Hello World');
}

// console.log(typeof func);


//**************** Memory **************

// Stack(Used in Primitive), Heap(Used in Non Primitive)

let myYoutubeName="Vikash Kumawat"

let anotheName = myYoutubeName
anotheName="Vikash Jalandra"

console.log(myYoutubeName);
console.log(anotheName);

let userOne={
    email:"a@b.c",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email='vikash@gmail.com'

console.log(userOne.email);
console.log(userTwo.email);