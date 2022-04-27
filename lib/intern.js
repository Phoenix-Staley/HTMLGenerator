const inquirer = require("inquirer");
const Employee = require("./employee");

class Intern extends Employee {
    constructor() {
        super();
        this.school = "";
    }

    getSchool() {
        inquirer
        .prompt([{
            type: "input",
            message: "What is this student's school?",
            name: "school"
        }])
        .then((response) => {
            this.school = response.school;
        })
        .catch((err) => console.error(err));
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;