function times(number1, number2) {
    let result = number1 * number2
    console.log(result)
    return result
}

let factorialOne = times(1, 1)
let factorialTwo = times(2, factorialOne)
let factorialThree = times(3, factorialTwo)
let factorialFour = times(4, factorialThree)
let factorialFive = times(5, factorialFour)