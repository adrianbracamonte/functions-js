// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1
function foo() {
    let bar = 2
}

foo();
console.log(bar)

// Logs 1. Setting the variable to 2 is out of scope.