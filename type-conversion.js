// Type Conversion 

let value = true
console.log(value, typeof value)

value = String(value)
console.log(value, typeof value)

let str = "123"
let num = Number(str)
console.log(str, typeof str)
console.log(num, typeof num)

// Truthy vs Falsy values

console.log(1, Boolean(1))
console.log(0, Boolean(0))
console.log(-2, Boolean(-2))
console.log("word", Boolean("word"))
console.log("", Boolean(""))
console.log(null, Boolean(null))
console.log(undefined, Boolean(undefined))