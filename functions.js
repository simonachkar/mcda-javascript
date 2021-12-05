// CALLBACK FUNCTIONS

/**
 * a callback is a function sent in an argument to another function
 * 
 * @param {String} question // text of the question
 * @param {Function} yes // function to run if answer is "Yes"
 * @param {Function} no // function to run if answer is "No"
 */
let confirm = (question) => {
    return Math.floor(Math.random() * 2);
}

let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no()
}

function agree() {
    console.log("You agreed!")
}

function disagree() {
    console.log("You disagreed!!")
}

ask("Do you agree?", agree, disagree)
