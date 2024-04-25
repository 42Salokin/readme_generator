// Connects to fs and inquirer modules, and the attached generateMarkdown js
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions that will prompt the message or list of choices
// I included a default answer to make it easy to go through the prompts for testing purposes
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
        message:"Which license is your project using?",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "None"]      
    },
    {
        type:"input",
        name:"contributing",
        message:"What are the guidelines for contributing to the project?",
        default:"Contributing",
    },
    {
        type:"input",
        name:"test",
        message:"How can the project be tested?",
        default:"Tests"
    },
    {
        type:"input",
        name:"github",
        message:"What is your GitHub username?",
        default:"42Salokin"
    },
    {
        type:"input",
        name:"email",
        message:"What is your email address?",
        default:"nicholas.dpoul@gmail.com"
    },
];

// Takes the big string and puts it into a file of the designated type
function writeToFile(fileName, string) {
    fs.writeFile(fileName, string, (err)=>{
        if(err) throw err;
    })
}

// Displays the questions as prompts in the command line
function init() {
    inquirer.prompt(questions).then((answers)=>{
        // Passes the answers to the big string
        const string = generateMarkdown(answers);
        console.log(answers);
        // Sends the big string to the function to write the file
        writeToFile("readme.md", string)
    })
}

// Function call to initialize app
init();


