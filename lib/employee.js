const inquirer = require("inquirer");

// Add methods to class declaration
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Return employee's name, if valid
    getName() {
        if (this.name.length > 2) {
            return this.name;
        } else {
            throw "Names have to be longer than 2 characters";
        }
    }

    // Return employee's id, if valid
    getId() {
        if (!isNaN(this.id)) {
            return this.id;
        } else {
            throw "IDs must be numbers";
        }
    }

    // Return employee's email, if valid
    getEmail() {
        if (this.email.indexOf("@") !== -1) {
            return this.email;
        } else {
            throw "Email addresses must contain an '@'";
        }
    }

    // Return employee's role
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;