const inquirer = require("inquirer");
const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    // Return manager's office number, if valid
    getOffice() {
        if (!isNaN(this.officeNum)) {
            return this.officeNum;
        } else {
            throw "Office numbers must be a number";
        }
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;