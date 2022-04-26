const inquirer = require("inquirer");

// Add methods to class declaration
class Employee {
    constructor() {
        this.name = "";
        this.id = 0;
        this.email = "";
    }

    getName() {
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

    getId() {
        inquirer
        .prompt([{
            type: "number",
            message: "What is this employee ID #?",
            name: "idNum"
        }])
        .then((response) => {
            this.id = response.idNum;
        })
        .catch((err) => console.error(err));
    }

    getEmail() {
        inquirer
        .prompt([{
            type: "input",
            message: "What is this employee's email?",
            name: "email"
        }])
        .then((response) => {
            this.email = response.email;
        })
        .catch((err) => console.error(err));
    }

    getRole() {
        return "Employee";
    }
}

Employee.prototype.getRole = () => "Employee";

// const test = new Employee();

// test.getId();

module.exports = Employee;