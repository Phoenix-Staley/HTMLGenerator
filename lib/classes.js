const inquirer = require("inquirer");

class Employee {
    constructor() {
        this.name = "";
        this.id = 0;
        this.email = "";
    }
}

Employee.prototype.getName = function (username) {
    let newName;
    if (username) {
        newName = username;
    } else {
        inquirer
        .prompt([{
            type: "input",
            message: "What is this person's name?",
            name: "empName"
        }])
        .then((response) => {
            newName = response.empName;
        })
        .catch((err) => console.error(err));
    }
    this.name = newName;
}

Employee.prototype.getId = function () {
    inquirer
        .prompt([{
            type: "number",
            message: "Employee ID #",
            name: "idNum"
        }])
        .then((response) => {
            this.id = response.idNum;
        })
        .catch((err) => console.error(err));
}

Employee.prototype.getRole = () => "Employee";

// const test = new Employee();

// test.getId();

module.exports = {Employee};