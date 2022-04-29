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

const genericQuestions = [
    {
        type: "input",
        message: "What is this person's name?",
        name: "empName"
    },
    {
        type: "number",
        message: "What is this employee ID #?",
        name: "idNum",
        validate: function (input) {
            return (isNaN(input) ? "Please enter a number" : true);
        }
    },
    {
        type: "input",
        message: "What is this employee's email?",
        name: "email"
    }
];

const engQuestions = genericQuestions.concat([{
    type: "input",
    message: "What is this engineer's Github username?",
    name: "github"
}]);

const intQuestions = genericQuestions.concat([{
    type: "input",
    message: "What is this student's school?",
    name: "school"
}]);

const mangQuestions = genericQuestions.concat([{
    type: "number",
    message: "What is this manager's office #?",
    name: "officeNum",
    validate: function (input) {
        return (isNaN(input) ? "Please enter a number" : true);
    }
}]);

module.exports = {keepGoing, typeOfEmp, engQuestions, intQuestions, mangQuestions};