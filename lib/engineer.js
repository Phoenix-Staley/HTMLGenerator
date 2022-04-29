const inquirer = require("inquirer");
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
        // return new Promise((resolve, reject) => {
        //     inquirer
        //     .prompt([{
        //         type: "input",
        //         message: "What is this engineer's Github username?",
        //         name: "github"
        //     }])
        //     .then((response) => {
        //         this.github = response.github;
        //         resolve();
        //     })
        //     .catch((err) => reject(err));
        // });
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;