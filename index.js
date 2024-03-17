// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [
    inquirer
        .prompt([
            {
                type: 
                message: 
                name: 'title',
            },
            {
                type: 
                message: 
                name: 'description',
            },
            {
                type: 
                message: 
                name: 'tableOfContents',
            },
            {
                type: 
                message: 
                name: 'installation',
            },
            {
                type: 
                message: 
                name: 'usage',
            },
            {
                type: 
                message: 
                name: 'licence',
            },
            {
                type: 
                message: 
                name: 'contributing',
            },
            {
                type: 
                message: 
                name: 'tests',
            },
            {
                type: 
                message: 
                name: 'questions',
            },

        ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
