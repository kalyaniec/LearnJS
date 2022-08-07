//Program 7 - Create an array of length 5 and store below numbers 1, 11, 111, 222, 555.Write a program to calculate the average of numbers.

let arr = []
arr.push(1, 11, 111, 222, 555)
let length = 0
console.log(arr)

function averageofArray(arr) {
    let sum = 0
    for (let index = 0; index < arr.length; index++) {

        sum = arr[index] + sum

    }
    return (sum / arr.length)
}


console.log("The average of given array is : ", averageofArray(arr))