const Employee = require("./employee");

class Engineer extends Employee {
    constructor() {
        super();
        this.github = "";
    }

    getGithub() {
        inquirer
        .prompt([{
            type: "input",
            message: "What is this engineer's Github username?",
            name: "github"
        }])
        .then((response) => {
            this.github = response.github;
        })
        .catch((err) => console.error(err));
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;