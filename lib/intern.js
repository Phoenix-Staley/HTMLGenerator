const inquirer = require("inquirer");
const Employee = require("./employee");

class Intern extends Employee {
    constructor() {
        super();
        this.school = "";
    }

    getSchool() {
        return new Promise((resolve, reject) => {
            inquirer
            .prompt([{
                type: "input",
                message: "What is this student's school?",
                name: "school"
            }])
            .then((response) => {
                this.school = response.school;
                resolve();
            })
            .catch((err) => reject(err));
        });
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;