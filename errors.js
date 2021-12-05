try {
    console.log("I'm trying")
    // throw new SyntaxError("SyntaxError")
    throw new Error("Error")
} catch (error) {
    // if (error instanceof SyntaxError) {
    //     console.log("Uh oh, syntax error...", error)
    // }
    console.log("Uh oh, error...", error)
}

// let error = new Error(message);
// let error = new SyntaxError(message);
// let error = new ReferenceError(message);

try {
    // ... try to execute the code 
} catch (err) {
    // ... handle errors 
} finally {
    // ... execute always
}