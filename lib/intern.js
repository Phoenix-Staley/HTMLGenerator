const inquirer = require("inquirer");
const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
        // return new Promise((resolve, reject) => {
        //     inquirer
        //     .prompt([{
        //         type: "input",
        //         message: "What is this student's school?",
        //         name: "school"
        //     }])
        //     .then((response) => {
        //         this.school = response.school;
        //         resolve();
        //     })
        //     .catch((err) => reject(err));
        // });
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;