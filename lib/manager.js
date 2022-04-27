const inquirer = require("inquirer");
const Employee = require("./employee");

class Manager extends Employee {
    constructor() {
        super();
        this.officeNum = 0;
    }

    getOffice() {
        return new Promise((resolve, reject) => {
            inquirer
            .prompt([{
                type: "number",
                message: "What is this manager's office #?",
                name: "officeNum",
                validate: function (input) {
                    return (isNaN(input) ? "Please enter a number" : true);
                }
            }])
            .then((response) => {
                this.officeNum = response.officeNum;
                resolve();
            })
            .catch((err) => reject(err));
        });
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;