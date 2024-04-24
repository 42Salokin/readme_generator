// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of your project?",
        default:"Title",
    },
    {
        type:"input",
        name:"description",
        message:"What is a description of your project?",
        default:"Description",
    },
    {
        type:"input",
        name:"installation",
        message:"What instructions are needed for installation?",
        default:"Instructions",
    },
    {
        type:"input",
        name:"usage",
        message:"What information is needed for proper usage?",
        default:"Usage",
    },
    {
        type:"input",
        name:"credits",
        message:"Would you like to credit any collaborators who aided with your project?",
        default:"Credits",
    },
    {
        type:"list",
        name:"license",
        message:"What license is your project using?",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License"]      
    },
    {
        type:"input",
        name:"contribution",
        message:"What are the guidelines for contributing to the project?",
        default:"Contributions",
    },
    {
        type:"input",
        name:"test",
        message:"How can the project be tested?",
        default:"Tests"
    },
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
