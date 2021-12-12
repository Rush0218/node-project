// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs'); 
const util = require('util'); 
const generateMarkdown = require('./utils/generateMarkdown'); 
const asyncFile = util.promisify(fs.writeFile);


//confirm answers 
const confrimAnswer = async (input) => {
    if(input === "") {
        return console.log('Please provide a valid entry!')
    }
    return true; 
}; 

//create an array of questions for user input
function questions(){ 
    return inquirer.prompt([
    {
        type: 'input', 
        name: 'username', 
        message: 'What is your github username?', 
        validate: confrimAnswer
    }, 
    {
        type: 'input',
        name: 'title', 
        message: 'What is the title of your project?', 
        validate: confrimAnswer
    }, 
    {
        type: 'input', 
        name: 'description', 
        message: 'Please provide a description of your project.', 
        validate: confrimAnswer
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
        choices: ['MIT', 'Apache', 'ISC', 'GNU', 'Mozilla', 'Academic', 'Open']
    }, 
    {
        type: 'input', 
        name: 'email', 
        message: 'Please provide an email address for contact information.'
    }
    ]); 
}; 


//initialize app
async function init() {
    try {
        const userResponses = await questions(); 
        const markdown = generateMarkdown(userResponses); 

       await asyncFile('ex-README.md', markdown); 
       console.log('README.md file was successfully generated!')
    } catch (err) {
        console.log(err); 
    }
}; 


//function call
init();
