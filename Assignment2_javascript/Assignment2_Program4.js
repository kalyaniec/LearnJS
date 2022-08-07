//Program 4 - Write a function that accepts interest, principle, and tenure and calculates EMI.
let principle = 3800000
let interest = 7.2
let tenure = 20

function calculateEMI(principle, interest, tenure) {
    let emi = 0.0
    tenure = tenure * 12 // converting to months

    emi = ((principle * interest * Math.pow(1 + interest, tenure)) / (Math.pow(1 + interest, tenure) - 1)) / (1200)

    return (emi)

}
console.log("The emi for given principle ,rate of interest and tenure is :", calculateEMI(principle, interest, tenure))