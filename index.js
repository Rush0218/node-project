// TODO: Include packages needed for this application
const fs = require('fs')
const util = require('util')
const inquirer = require('inquirer'); 
const generate = require('./generateMarkdown.js'); 



// TODO: Create an array of questions for user input
const questions = [(
    {
        type: 'input', 
        name: 'username', 
        message: 'What is your github username?', 
        validate: function (response) {
            if(response === "") {
                return console.log('Please provide a valid GitHub username!')
            }
            return true; 
        }
    }, 
    {
        type: 'input', 
        name: 'repo', 
        message: "what is the name of your GitHub repository?", 
        validate: function(response) {
            if(response === "") {
                return console.log('Please provide a vaild GitHub repository name!')
            }
            return true; 
        }
    }, 
    {
        type: 'input',
        name: 'title', 
        message: 'What is the title of your project?', 
        validate: function (response) {
            if(response === "") {
                return console.log('Please provide a valid title for your project!')
            }
            return true; 
        }
    }, 
    {
        type: 'input', 
        name: 'description', 
        message: 'Please provide a description of your project.', 
        validate: function (response) {
            if(response === "") {
                return console.log('Please provide a valid description of your project!')
            }
            return true; 
        }
    }, 
    {
        type: 'input', 
        name: 'installation', 
        message: 'If applicable, please describe the installation process for your project.'
    }, 
    {
        type: 'input', 
        name: 'usage', 
        message: 'If applicable, please describe how this project will be used.'
    }, 
    {
        type: 'input', 
        name: 'contributing', 
        message: 'If applicable, please provide guidelines on how other developers can contribute to the project.'
    }, 
    {
        type: 'input', 
        name: 'tests', 
        message: 'If applicable, please provide any written tests for your application and how to run them.'
    }, 
    {
        type: 'list', 
        name: 'license', 
        message: 'Choose a license for your project.', 
        choices: ['MIT License', 'Apache License 2.0', 'Boost Software License 1.0', 'GNU GPLv3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'IBM Public License 1.0', 'Mozilla Public License 2.0']
    }
)]; 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err)
        }
        console.log("The README.md file was successfully generated!")
    }); 
}; 

// TODO: Create a function to initialize app
function init() {
    const userResponse = inquirer.prompt(questions); 

}

// Function call to initialize app
init();
