class Courses {

    constructor(CourseName, Price, Validity, TrainerName, PhoneNumber) {
        this.CourseName = CourseName;
        this.Price = Price
        this.Validity = Validity
        this.TrainerName = TrainerName
        this.PhoneNumber = PhoneNumber
    }

    set(newCourseName, newPrice, newValidity, newTrainerName, newPhoneNumber) {
        this.CourseName = newCourseName;
        this.Price = newPrice
        this.Validity = newValidity
        this.TrainerName = newTrainerName
        this.PhoneNumber = newPhoneNumber
    }
    get() {

        console.log("Thank you for showing interest in " + this.CourseName + "- Current Price is " + this.Price + " and validity of course is till " + this.Validity + " If you have any query then reach out to " + this.TrainerName + " mobile - " + this.PhoneNumber);
    }

}

let course1 = new Courses("Cypress", 4000, 02052023, "Mukhesh", 678909875678)
course1.set("new Cypress", 4000, 02052023, "Mukhesh", 678909875678)


let course2 = new Courses("Java", 8000, 02052023, "ramesh", 9876543)
course2.set("new java", 80770, 02052023, "ramesh", 9876543)


let course3 = new Courses("Playwrite", 4200, 02052025, "Dinesh", 4567895678)
course1.get()
course2.get()
course3.get()