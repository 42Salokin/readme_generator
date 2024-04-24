// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, string) {
   
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        // pass the answers to the big string
        const string = generateMarkdown(answers);
        console.log(answers);
        
        writeToFile("readme.md", string)
    })
}

// Function call to initialize app
init();
