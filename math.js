console.log(2 + 1)
console.log(4 - 1)
console.log(2 * 2)
console.log(4 / 2)
console.log(4 % 2)
console.log(5 ** 2)

console.log("this" + "is" + "concatenated")
console.log("1" + 2)

let a = 1
let b = 2
let c = 3 - (a = b + 1)
console.log('a', a) // 3
console.log('b', b) // 2
console.log('c', c) // 0

// Chaining assignments
a = b = c = 2
console.log('a', a) // 2
console.log('b', b) // 2
console.log('c', c) // 2

let v = 1
v += 1 // 2
v *= 2 // 4
v /= 2 // 2
v -= 2 // 0
console.log('v', v)

// Increment and Decrement
let counter = 0
counter++
console.log(counter)

// RANDOM
console.log(Math.random()) // return value between 0 and <1
console.log(Math.floor(2.4)) // transforms into an integer 

// get a random number between 0 and 3 
console.log(Math.random() * 4) // return value between 0 and <4
console.log(Math.floor(Math.random() * 4)) // 0, 1, 2 or 3