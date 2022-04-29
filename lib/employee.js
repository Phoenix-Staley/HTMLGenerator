const inquirer = require("inquirer");

// Add methods to class declaration
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        if (this.name.length > 2) {
            return this.name;
        } else {
            throw "Names have to be longer than 2 characters";
        }
        // return new Promise((resolve, reject) => {
        //     inquirer
            // .prompt([{
            //     type: "input",
            //     message: "What is this person's name?",
            //     name: "empName"
            // }])
        //     .then((response) => {
        //         this.name = response.empName;
        //         resolve();
        //     })
        //     .catch((err) => reject(err));
        // });
    }

    getId() {
        if (!isNaN(this.id)) {
            return this.id;
        } else {
            throw "IDs must be numbers";
        }
        // const checkResp = (input) => {
        //     if (typeof input === "number") {
        //         return true;
        //     } else {
        //         return "Please enter a number"
        //     }
        // }
        // return new Promise((resolve, reject) => {
        //     inquirer
            // .prompt([{
            //     type: "number",
            //     message: "What is this employee ID #?",
            //     name: "idNum",
            //     validate: function (input) {
            //         return (isNaN(input) ? "Please enter a number" : true);
            //     }
            // }])
        //     .then((response) => {
        //         this.id = response.idNum;
        //         resolve();
        //     })
        //     .catch((err) => reject(err));
        // });
    }

    getEmail() {
        if (this.email.indexOf("@") !== -1) {
            return this.email;
        } else {
            throw "Email addresses must contain an '@'";
        }
        // return new Promise((resolve, reject) => {
        //     inquirer
            // .prompt([{
            //     type: "input",
            //     message: "What is this employee's email?",
            //     name: "email"
            // }])
        //     .then((response) => {
        //         this.email = response.email;
        //         resolve();
        //     })
        //     .catch((err) => reject(err));
        // })
    }

    getRole() {
        return "Employee";
    }
}

// const test = new Employee();

// test.getId();

module.exports = Employee;