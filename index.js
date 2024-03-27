// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
        {
            type: 'input',
            message: 'Enter the project title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe the project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter usage information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines:',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Enter test instructions',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Enter your Github username',
            name: 'user',
        },
        {
            type: 'input',
            message: 'Enter your email',
            name: 'email',
        },
        {
            type: 'list',
            message: 'Choose a license:',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
        },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const readme = generateMarkdown(data);
        fs.writeFile('./dist/README.md', readme, (err) =>
          err ? console.log(err) : console.log('Successfully created README!')
        );
    });
}

// Function call to initialize app
init();
