// // Intro
// // In JS scopes are important 
{

    // show message
    let message = "Hello";
    console.log(message);
}

{
    // show another message
    let message = "Goodbye";
    console.log(message);
}

/// === There’d be an error without blocks =====

// let message = "Hello";
// console.log(message);

// let message = "Goodbye"; // Error: variable already declared
// console.log(message);
// =============================================


// For if, for, while and so on, variables declared in {...} are also only visible INSIDE
if (true) {
    let phrase = "Hello!";
    console.log(phrase); // Hello!
}
// console.log(phrase); // Error, no such variable!

// Same for if
for (let i = 0; i < 3; i++) {
    //  the variable i is only visible inside this for
    console.log(i); // 0, then 1, then 2
}
// console.log(i); // Error, no such variable

// *********************************************

// Closure 
function outer() {
    let state = '👨🏻‍💻'

    function inner() {
        return `This is my state, ${state}`
    }

    return inner
}

console.log(outer)
console.log(outer.toString())
console.log(outer())
console.log(outer().toString())
const func = outer()
console.log(func())
console.log(func().toString())
console.log(outer()())

// *********************************************

// Interview Questions:

// ============================
// let name = "John";

// function sayHi() {
//     console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // what will it show: "John" or "Pete"?
// ============================



// ============================
// for (var i = 0; i < 3; i++) {

//     const log = () => {
//         console.log(i)
//     }

//     setTimeout(log, 3000)
// }
// what will it print?
// ============================