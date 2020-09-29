// Imported Modules and Packages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Modules to Create the HTML App
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const teamArray = [];

// Function - Allows the user to choose which team member he/she wants to create
function createMemberType() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMember",
        message: "Which type of team member would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "None"],
        default: "Manager",
      },
    ])
    .then((response) => {
      // Repeats the prompt if the user chooses none without building a team
      if (teamArray.length === 0 && response.teamMember === "None") {
        console.log(
          "--------------------------------------------------------------------\nYou did not add any members to your team."
        );
        createMemberType();
      } else if (response.teamMember === "None") { // Creates the HTML Page when the user clicks "None"
        console.log("Team Roster Complete.");
        fs.writeFile(outputPath, render(teamArray), (error) => {
          if (error) throw error;
        });
      } else {
        createTeam(response.teamMember);
      }
    })
    .catch((error) => {
      if (error) throw error;
    });
}

// Function - Allows the user to create each team member
function createTeam(memberType) {
  let counter = 0;

  if (memberType === "Engineer") {
    counter = 1;
  } else if (memberType === "Intern") {
    counter = 2;
  }

  const questions = [
    "What is your manager's office number?",
    "What is your engineer's GitHub username?",
    "What is your intern's school?",
  ];

  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is your ${memberType}'s name?`,
        default: "No name given.",
      },
      {
        type: "number",
        name: "id",
        message: `What is your ${memberType}'s id?`,
        default: "No id given.",
      },
      {
        type: "input",
        name: "email",
        message: `What is your ${memberType}'s email address?`,
        default: "No email address given.",
      },
      {
        type: "input",
        name: "special",
        message: questions[counter],
      },
    ])
    .then((response) => {
      // Destructures the response object
      const { name, id, email, special } = response;

      // Creates an instance of a team member and adds it to the array
      if (memberType === "Manager") {
        teamArray.push(new Manager(name, id, email, special));
      } else if (memberType === "Engineer") {
        teamArray.push(new Engineer(name, id, email, special));
      } else if (memberType === "Intern") {
        teamArray.push(new Intern(name, id, email, special));
      }
      createMemberType();
    })
    .catch((error) => {
      if (error) throw error;
    });
}

createMemberType();
