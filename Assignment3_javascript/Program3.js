class Courses {

    constructor(CourseName, Price, Validity, TrainerName, PhoneNumber) {
        this.CourseName = CourseName;
        this.Price = Price
        this.Validity = Validity
        this.TrainerName = TrainerName
        this.PhoneNumber = PhoneNumber
    }
    showDetails() {

        console.log("Thank you for showing interest in " + this.CourseName + "- Current Price is " + this.Price + " and validity of course is till " + this.Validity + " If you have any query then reach out to " + this.TrainerName + " mobile - " + this.PhoneNumber);
    }

}

export let course1 = new Courses("Cypress", 4000, '20 - 03 - 2020', "Mukhesh", 678909875678)
export let course2 = new Courses("Java", 8000, '09 - 08 - 2020', "ramesh", 9876543)
export let course3 = new Courses("Playwrite", 4200, '08 - 01 - 1989', "Dinesh", 4567895678)
course1.showDetails()
course2.showDetails()
course3.showDetails()