// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// function to generate markdown
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
        {
            type: 'list',
            message: 'What is the application license?',
            name: 'license',
            choices: ['Apache', 'BSD', 'MIT', 'Mozilla', 'Eclipse'],
            default: 'MIT'
        }
    ])
    .then((answers) => {
        console.log(answers);
        return answers;
    })
    .catch((err) => {
        console.log(err);
    });
};

// initialize promise 
const init = () => {
    questions()
    // generating a markdown file called README.md and sending the data to the generateMarkdown function
      .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
