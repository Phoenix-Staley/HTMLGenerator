const inquirer = require("inquirer");

// Add methods to class declaration
class Employee {
    constructor() {
        this.name = "";
        this.id = 0;
        this.email = "";
    }
}

Employee.prototype.getName = function (username) {
    inquirer
    .prompt([{
        type: "input",
        message: "What is this person's name?",
        name: "empName"
    }])
    .then((response) => {
        this.name = response.empName;
    })
    .catch((err) => console.error(err));
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