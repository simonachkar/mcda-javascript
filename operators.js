// == Nullish coalescing operator '??' ==

// a ?? b 
// if a is defined, is gonna be a
// if a is not defined, then b

let user
console.log(user ?? "Guest")

// this only works if user is undefined

user = ""
console.log(user ?? "Guest") // it will print ""
console.log(user || "Guest")

// || checks for the truthy values
// ?? checks for the defined value


// == Ternary operator '? :' ==

// Syntax: condition ? expressionIfTrue : expressionIfFalse

let age = 20
let canVote = age >= 18 ? "Yes, you can vote" : "No, too young"
console.log(canVote) // "Yes, you can vote"

age = 16
canVote = age >= 18 ? "Yes, you can vote" : "No, too young"
console.log(canVote) // "No, too young"
