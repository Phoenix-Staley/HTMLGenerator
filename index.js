const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./src/template");
const questions = require("./src/questions");
const [Engineer, Intern, Manager] = [require("./lib/engineer"), require("./lib/intern"), require("./lib/manager")];

// Questions for the beginning of each iteration
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

// An active list of all employees
const employees = [];

// Ask the user if they want to add more employees
function promptAgain(cb, finish) {
    inquirer.prompt(keepGoing).then((response) => {
        if (response.willContinue === "Yes") {
            cb();
        } else {
            finish();
            console.log("Your HTML file is ready!");
        }
    });
}

function generateHTML() {
    let html = ``;
    html += template.front;
    employees.forEach((employee) => {
        html += `${template.cardFront}
        ${template.titleFront}${employee.getRole()}${template.titleEnd}
        ${template.titleFront}${employee.getName()}${template.titleEnd}
        ${template.headerEnd}
        <h4>ID: ${employee.getId()}</h4>
        <h4>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></h4>`;

        if (employee.getRole() === "Engineer") {
            html += `<h4>Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</h4>`;
        } else if (employee.getRole() === "Intern") {
            html += `<h4>School: ${employee.getSchool()}</h4>`;
        } else if (employee.getRole() === "Manager") {
            html += `<h4>Office: #${employee.getOffice()}</h4>`
        }

        html += template.cardEnd;
    });
    html += template.tail;

    fs.writeFileSync("./dist/myTeam.html", html);
}

// Asks the questions, and repeats until the user has input all employees
function getEmpInfo() {
    inquirer.prompt(typeOfEmp)
    .then((response) => {
        return new Promise((resolve, reject) => {
            if (response.empType === "Engineer") {
                inquirer.prompt(questions.engQuestions)
                .then((answers) => {
                    const engineer = new Engineer(answers.empName, answers.idNum, answers.email, answers.github);
                    employees.push(engineer);
                    resolve();
                });
            } else if (response.empType === "Intern") {
                inquirer.prompt(questions.intQuestions)
                .then((answers) => {
                    const intern = new Intern(answers.empName, answers.idNum, answers.email, answers.school);
                    employees.push(intern);
                    resolve();
                });
            } else if (response.empType === "Manager") {
                inquirer.prompt(questions.mangQuestions)
                .then((answers) => {
                    const manager = new Manager(answers.empName, answers.idNum, answers.email, answers.officeNum);
                    employees.push(manager);
                    resolve();
                });
            } else {
                reject();
            }
        })
    })
    .then(response => {
        console.log();
        promptAgain(getEmpInfo, generateHTML);
    })
    .catch((err) => console.error(err));
}

// Start app
getEmpInfo();