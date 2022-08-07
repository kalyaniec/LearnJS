//Write a program to calculate the sum of 5 numbers.
function sumOfFiveNumbers(num1, num2, num3, num4, num5) {

    let sum = 0;
    sum = num1 + num2 + num3 + num4 + num5
    return (sum)
}

let num1 = 5,
    num2 = 5,
    num3 = 7,
    num4 = 9,
    num5 = 5
console.log("The sum of given 5 numbers is :" + sumOfFiveNumbers(num1, num2, num3, num4, num5))