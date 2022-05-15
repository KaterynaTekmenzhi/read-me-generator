// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown= require("./Develop/utils/generateMarkdown");

// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            name: 'username'
        },
    ]);
};

// initialize promise 
const init = () => {
    questions()
      .then((answers) => fs.writeFileSync('index.html', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
