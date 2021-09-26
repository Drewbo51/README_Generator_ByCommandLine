const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "list",
        name: "license",
        message: "Does your project have a license you would like to register?",
        choices: ["UCR", "Trilogy", "none"],
    },
    {
        type: "input",
        name: "description",
        message: "Please give us a brief description of your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "Does your project require any installation of dependencies?",
    },
    {
        type: "input",
        name: "usage",
        message: "What specific commands are used to run the program?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (error) => {
        error ? console.error(error) : console.log("Success, creating README.md. Please check your current working directory \n");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    });
}

// function call to initialize program
init();
