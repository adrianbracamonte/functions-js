function getNumber(prompt) {
    let rlSync = require('readline-sync')
    return parseFloat(rlSync.question(prompt))
}

function multiply(one, two) {
    return one * two
}

let one = getNumber('What is the first number? ')
let two = getNumber('What is the second number? ')

console.log(`${one} times ${two} = ${multiply(one, two)}`)
