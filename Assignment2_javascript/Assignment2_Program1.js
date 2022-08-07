let num1 = 3,
    num2 = 3,
    num3 = 3,
    num4 = 3,
    num5 = 3


function avgOfFiveNumbers(n1, n2, n3, n4, n5) {
    sumofNumbers = addNumbers(n1, n2, n3, n4, n5)
    return (sumofNumbers / 5)
}

function addNumbers(n1, n2, n3, n4, n5) {
    sum = n1 + n2 + n3 + n4 + n5
    return (sum)
}



//Program 1- Write a program to calculate the average of 5 numbers.
console.log("The average of the given numbers is :" + avgOfFiveNumbers(num1, num2, num3, num4, num5))