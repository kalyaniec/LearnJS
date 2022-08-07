console.log("=============Program1=================================================")

//Program1 : Program 1- Write a program to add 2 numbers and print the result on the console.
function sum(num1, num2) {
    let result = num1 + num2
    return (result)
}
console.log("The Sum of the given 2 numbers is :" + sum(2, 3))
console.log()
console.log("=============Program2=================================================")



//Program2 : Write a program to subtract 2 numbers and print the result on the console.
function subtract(num1, num2) {
    let result = num1 - num2
    return (result)
}
console.log("The Subtracted value of given 2 numbers is :" + subtract(2, 9))
console.log()
console.log("============Program3==================================================")


//Program3 :Write a program to display student results. If the number is below 50 then print fail and if the number is above 50 then pass.
function studentResult(studentscore) {
    let result = "fail"
    let score = parseInt(studentscore)
    if (score >= 50) {
        result = "pass"
    }

    return (result)
}
console.log("The result of the student for the given score is : " + studentResult('a'))
console.log()
console.log("==============Program4 with for loop================================================")

/*Program 4- Write a program to display student results. 
		If number above 90 then grade A
		If number above 70 and below 90 then grade B
        If number above 50 and below 70 then grade C
        If number below 70 then Fail */

function studentResultandGrade(studentscore) {
    let result = "fail"
    let grade = ''
    let score = parseInt(studentscore)
    if (score >= 90) {
        result = "pass"
        grade = 'A'

    } else if (score >= 70 && score <= 90) {

        result = "pass"
        grade = 'B'


    } else if (score >= 50 && score <= 70) {

        result = "pass"
        grade = 'C'


    }

    return ("grade :" + grade + " result :" + result)
}
console.log("The result of the student for the given score is : " + studentResultandGrade(90))
console.log()
console.log("==================Program4 with switch============================================")


/*With switch statement :Program 4- Write a program to display student results. 
		If number above 90 then grade A
		If number above 70 and below 90 then grade B
        If number above 50 and below 70 then grade C
        If number below 70 then Fail */

function studentResultwithSwitch(studentscore) {
    let result = ""
    let grade = ''

    let score = parseInt(studentscore)

    switch (true) {
        case score > 90:
            result = "pass"
            grade = 'A'
            break;

        case score >= 70 && score <= 90:

            result = "pass"
            grade = 'B'

            break;

        case score >= 50 && score <= 70:

            result = "pass"
            grade = 'C'
            break;

        default:
            result = "fail"
    }
    return ("grade :" + grade + " result :" + result)
}



console.log("The result of the student for the given score is : " + studentResultwithSwitch(2))
console.log("==============================================================")
console.log()


console.log("=============Program5=================================================")
//Program 5- Write a function that takes 3 numbers as arguments and perform multiplication of the numbers and returns the output. .
function multiplication(num1, num2, num3) {
    let result = num1 * num2 * num3
    return (result)
}
console.log("The multiplication of the given 3 numbers is :" + multiplication(2, 3, 7))