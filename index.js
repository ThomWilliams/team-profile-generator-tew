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
        message: 'Would you like to add another engineer or intern?',
        name: 'addEngineer',
        choices: ['Add Engineer', 'Add Intern', 'Team Complete - Finish building team'],
    },
])
}

// Creates array of questions for Engineer user input
const engineerQuestions = () => {
    return inquirer.prompt([
       {
           type: 'input',
           name: 'engineerName',
           message: 'Engineer - please enter employee name: ',
       },
       {
           type: 'input',
           name: 'engineerId',
           message: 'Engineer - please enter employee ID number: ',
       },
       {
           type: 'input',
           name: 'engineerEmail',
           message: 'Engineer - please enter employee email address: ',
       },
       {
           type: 'input',
           name: 'engineerGithub',
           message: 'Engineer - please enter employee GitHub username: ',
       },
       {
        type: 'list',
        message: 'Engineer - Would you like to add another engineer or intern?',
        name: 'addEngineer',
        choices: ['Add Engineer', 'Add Intern', 'Team Complete - Finish building team'],
    },
   ])
} 


// Creates array of questions for Intern user input
const internQuestions = () => {
    return inquirer.prompt([
       {
           type: 'input',
           name: 'internName',
           message: 'Intern - please enter intern name: ',
       },
       {
           type: 'input',
           name: 'internId',
           message: 'Intern - please enter intern ID number: ',
       },
       {
           type: 'input',
           name: 'internEmail',
           message: 'Intern - please enter intern email address: ',
       },
       {
           type: 'input',
           name: 'internSchool',
           message: 'Intern - please enter the school of the intern: ',
       },
       {
        type: 'list',
        message: 'Would you like to add another engineer or intern?',
        name: 'addEngineer',
        choices: ['Add Engineer', 'Add Intern', 'Team Complete - Finish building team'],
    },
   ])
} 

// writes data to file
const writeToFile = util.promisify(fs.writeFile);

// Function initializes manager input data to app
const initManager = () => {
    managerQuestions() 
    .then((data) => writeToFile('index.html', generateHTML(data)))
    .then(() => console.log('Successfully written manager details to index.html'))
    .catch((err) => console.error(err));
};

// Function initializes engineer input data to app
const initEngineer = () => {
    engineerQuestions()
    .then((data) => writeToFile('index.html', generateHTML(data)))
    .then(() => console.log('Successfully written engineer details to index.html'))
    .catch((err) => console.error(err));
};

// Function initializes intern input data to app
const initIntern = () => {
    internQuestions() 
    .then((data) => writeToFile('index.html', generateHTML(data)))
    .then(() => console.log('Successfully written intern details to index.html'))
    .catch((err) => console.error(err));
};

// Functions called to initialize app
initManager();
initEngineer();
initIntern();

