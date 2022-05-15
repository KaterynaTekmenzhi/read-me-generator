// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown= require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
