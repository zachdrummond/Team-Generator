const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const UserInput = require("./lib/UserInput");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let memberType = "";

function memberType(){
  inquirer.prompt([
    {
      type: "list",
      name: "teamMember",
      message: "Which type of team member would you like to add?",
      choices: ["Manager", "Engineer", "Intern", "None"],
      default: "Manager"
    }
  ]).then(response =>{
    memberType = response.teamMember;

  }).catch(error => {
    if (error) throw error;
  });
}

function createTeam(){
  let counter = 0;
  const roleArray = ["manager", "engineer", "intern"];
  const questions = [
      "What is your manager's office number?",
      "What is your engineer's GitHub username?",
      "What is your intern's school?",
    ];

  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What is your ${roleArray[counter]}'s name?`,
      default: "No name given.",
    },
    {
      type: "number",
      name: "id",
      message: `What is your ${roleArray[counter]}'s id?`,
      default: "No id given.",
    },
    {
      type: "input",
      name: "email",
      message: `What is your ${roleArray[counter]}'s email address?`,
      default: "No email address given.",
    },
    {
      type: "input",
      name: "special",
      message: questions[counter],
    }
  ]).then(response =>{
    

  }).catch(error => {
    if (error) throw error;
  });
}

      ])
      .then(function (response) {
        const { name, id, email, special, teamMember } = response;

        if ((counter === 0)) {
          const manager = new Manager(name, id, email, special);
        }

        if (teamMember === "Engineer") {
          counter = 1;
          const engineer = new Engineer(name, id, email, special);

        } else if (teamMember === "Intern") {
          counter = 2;
          const intern = new Intern(name, id, email, special);

        } else {
          console.log("Team Roster Complete.");
          console.log(manager, engineer, intern);
        }
      })
      .catch(function (error) {
        if (error) throw error;
      });
  }
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
