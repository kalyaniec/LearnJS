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



console.log("The result of the student for the given score is : " + studentResultwithSwitch(50))