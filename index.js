const inquirer = require("inquirer");
const templateHTML = require("./src/template");
const [Employee, Engineer, Intern, Manager] = [require("./lib/employee"), require("./lib/engineer"), require("./lib/intern"), require("./lib/manager")];

const keepGoing = [{
    type: "list",
    choices: ["Yes", "No"],
    message: "Would you like to add another employee?",
    name: "willContinue"
}];
const typeOfEmp = [{
    type: "list",
    choices: ["Engineer", "Manager", "Intern"],
    message: "What position is this employee?",
    name: "empType"
}];

const employees = [];

function promptAgain(cb) {
    inquirer.prompt(keepGoing).then((response) => {
        if (response.willContinue === "Yes") {
            cb();
        }
    });
}

function getEmpInfo() {
    inquirer.prompt(typeOfEmp)
    .then((response) => {
        if (response.empType === "Engineer") {
            const engineer = new Engineer();
            engineer.getName()
                .then(engineer.getId()
                .then(engineer.getEmail()
                .then(engineer.getGithub()
                .then(() => {
                    employees.push(engineer);
                    promptAgain(getEmpInfo);
                })
                )));
        }
    })
}

getEmpInfo();