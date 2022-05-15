// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown= require("./Develop/utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the application title?',
        name: 'title' 
    },
    {
        type: 'input',
        message: 'What is the application description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is the application installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the application usage information?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What is the application license?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Who is the application author?',
        name: 'author'
    },
    {
        type: 'input',
        message: 'What is the application contributing guidelines?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What is the application tests?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github'
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response) {
        const data = generateMarkdown(response);
        fs.writeFile('./Develop/utils/README.md', data, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });
    });
};

// Function call to initialize app
init();
