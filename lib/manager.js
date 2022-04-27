const inquirer = require("inquirer");
const Employee = require("./employee");

class Manager extends Employee {
    constructor() {
        super();
        this.officeNum = 0;
    }

    getGithub() {
        inquirer
        .prompt([{
            type: "number",
            message: "What is this manager's office #?",
            name: "officeNum"
        }])
        .then((response) => {
            this.officeNum = response.officeNum;
        })
        .catch((err) => console.error(err));
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;