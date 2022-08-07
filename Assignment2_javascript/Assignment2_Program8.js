/*Program 8- Write a program that creates the below Object.
Object name - Student
Property
Name
College Name
Location
PinCode
Teachers details should be teacherName, teacherPhone, teacherSubjects

Print Student name, teacherName on console.*/
let student = {
    name: "Kalyani",
    collegeName: "MVJ",
    location: "chanasandra",
    pinCode: 5600089,
    teacher: {
        teacherName: "Manan",
        teacherPhone: 97868786878,
        teacherSubject: "Maths"

    }
}

console.log("The Student name  :", student.name, "teacher name is :", student.teacher.teacherName)