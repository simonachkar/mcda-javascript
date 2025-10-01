// "object literal" syntax 
let user = {
    name: "John",
    age: 33,
    job: "Software Developer"
}
console.log(typeof user, user)

// "object constructor" syntax 
user = new Object({
    name: "John",
    age: 33,
    job: "Software Developer",
    // "like birds": true,
})
console.log(typeof user, user)

console.log(user.name) // John
// console.log(...user)  // Spread Operator
// console.log(user["like birds"]) // true

delete user.job // delete property
console.log(typeof user, user)

user.pronouns = "He/Him"
console.log(typeof user, user)

// Check property existence "in"
if ("John" in user) {
    console.log(true)
}

// Loop the object key by key 
for (key in user) {
    console.log(key)
    console.log(user[key])
}

// THIS
user = {
    name: "John",
    age: 33,
    printNameArrow: () => { // CANNOT USE ARROW FUNCTION
        console.log(this.name)
    },
    printName: function () {
        console.log(this.name)
    }
}

user.printNameArrow() // error
user.printName()

// Creating objects with "Constructors"
function User(name) {
    this.name = name
    this.isAdmin = false
}

let user1 = new User("Simon")
console.log(user1.name, user1.isAdmin)

// OOP
// class User {
//     constructor(name) {
//         this.name = name
//         this.isAdmin = false
//     }
// }

// Operation chaining 
user = {
    name: {
        firstName: "Simon",
        lastName: "Achkar"
    }
}

console.log(user.name.firstName) // Simon
console.log(user.name) // it will log the object
// console.log(user.job.title) // throw error
console.log(user?.job?.title) //  undefined (no error)

