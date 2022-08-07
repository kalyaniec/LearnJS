//Program 5- Print even numbers from 0-100
let startNumber = 0
let endNumber = 100


function getoddNumber(startNumber, endNumber) {
    let number = startNumber
    while (number <= endNumber) {
        if (number % 2 != 0) {
            console.log(number)
        }
        number++
    }
}

console.log("Even numbers 0-100 are :", getoddNumber(startNumber, endNumber))