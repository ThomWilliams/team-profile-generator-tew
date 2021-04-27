// packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');


// Creates array of questions for user input
const managerQuestions = () => {
 return inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'Team Manager - please enter your name: ',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Team Manager - please enter your employee ID number: ',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Team Manager - please enter your email address: ',
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'Team Manager - please enter the office number: ',
    },
    {
        type: 'list',
        message: 'Team Manager - would you like to add an engineer or intern? (Y / N): ',
        name: 'addEngineer',
        choices: ['Y', 'N',],
    },
])
}



// writes data to file
const writeToFile = util.promisify(fs.writeFile);

// Function initializes manager questions to app
const init = () => {
    managerQuestions() 
    .then((data) => writeToFile('index.html', generateHTML(data)))
    .then(() => console.log('Successfully written to index.html'))
    .catch((err) => console.error(err));
};



// Function called to initialize app
init();

