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