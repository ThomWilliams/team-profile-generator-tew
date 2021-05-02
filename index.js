// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateHtml = require("./src/generate-html.js");
const Intern = require("./lib/intern");

const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");

const outputFolder = path.resolve(__dirname, "output");
const outputLocation = path.join(outputFolder, "myTeam.html");

const teamMambers = [];
// Creates array of questions for user input



// Function initializes manager input data to app
const init = () => {

    const managerQuestions = () => {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "managerName",
              message: "Team Manager - please enter your name: ",
            },
            {
              type: "number",
              name: "managerId",
              message: "Team Manager - please enter your employee ID number: ",
            },
            {
              type: "input",
              name: "managerEmail",
              message: "Team Manager - please enter your email address: ",
            },
            {
              type: "input",
              name: "managerOffice",
              message: "Team Manager - please enter the office number: ",
            },
          ])
          .then((answers) => {
            const newManager = new Manager(
              answers.managerName,
              answers.managerId,
              answers.managerEmail,
              answers.managerOffice
            );
            console.log(newManager)
            teamMambers.push(newManager);
            console.log(teamMambers)
            createRestOfTeam();
          });
      };
      
      const createRestOfTeam = () => {
        inquirer
          .prompt([
            {
              type: "list",
              message: "Would you like to add another engineer or intern?",
              name: "addChoice",
              choices: [
                "Add Engineer",
                "Add Intern",
                "Team Complete - Finish building team",
              ],
            },
          ])
          .then((choice) => {
            if (choice.addChoice === "Add Engineer") {
              engineerQuestions();
            } else if (choice.addChoice === "Add Intern") {
              internQuestions();
            } else {
              buildTeamHTML();
            }
          });
        }
        // Creates array of questions for Engineer user input
        const engineerQuestions = () => {
          return inquirer.prompt([
            {
              type: "input",
              name: "engineerName",
              message: "Engineer - please enter employee name: ",
            },
            {
              type: "number",
              name: "engineerId",
              message: "Engineer - please enter employee ID number: ",
            },
            {
              type: "input",
              name: "engineerEmail",
              message: "Engineer - please enter employee email address: ",
            },
            {
              type: "input",
              name: "engineerGithub",
              message: "Engineer - please enter employee GitHub username: ",
            },
          
          ]).then(answers => {
              const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
              teamMambers.push(newEngineer);
              createRestOfTeam(); 
          });
        };
      
        // Creates array of questions for Intern user input
        const internQuestions = () => {
          return inquirer.prompt([
            {
              type: "input",
              name: "internName",
              message: "Intern - please enter intern name: ",
            },
            {
              type: "number",
              name: "internId",
              message: "Intern - please enter intern ID number: ",
            },
            {
              type: "input",
              name: "internEmail",
              message: "Intern - please enter intern email address: ",
            },
            {
              type: "input",
              name: "internSchool",
              message: "Intern - please enter the school of the intern: ",
            },
            ]).then(answers => {
                const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                teamMambers.push(newIntern);
                createRestOfTeam(); 
         });
      };
          

      const buildTeamHTML = () => {
          if(!fs.existsSync(outputFolder)){
              fs.mkdirSync(outputFolder)
          }
          console.log(teamMambers)
          fs.writeFileSync(outputLocation, generateHtml(teamMambers), "utf-8")
      }

  managerQuestions();


};

// Functions called to initialize app
init();


