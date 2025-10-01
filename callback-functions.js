// CALLBACK FUNCTIONS

// A callback is a function passed into another function, to be called later once some work is done.

// Example: Simulate fetching data from a server
function fetchData(callback) {
    console.log("Fetching data...")

    setTimeout(() => {
        let data = { id: 1, name: "Simon" }
        callback(data) // Call the callback with the result
    }, 2000) // simulate a 2-second delay
}

// This is the callback function
function displayData(data) {
    console.log("Data received:", data)
}

// Use the function with a callback
fetchData(displayData)
