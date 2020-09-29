const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const teamArray = [];

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
      if(response.teamMember === "None"){
        console.log("Team Roster Complete.");
      } else{
        createTeam(response.teamMember);
      }
    })
    .catch((error) => {
      if (error) throw error;
    });
}

function createTeam(memberType) {
  let counter = 0;

  if(memberType === "Engineer"){
    counter = 1;
  } else if(memberType === "Intern"){
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
      const { name, id, email, special} = response;

      if (memberType === "Manager") {
        teamArray.push(new Manager(name, id, email, special));
      } else if(memberType === "Engineer"){
        teamArray.push(new Engineer(name, id, email, special));
      } else if(memberType === "Intern"){
        teamArray.push(new Intern(name, id, email, special));
      }
      createMemberType();
    })
    .catch((error) => {
      if (error) throw error;
    });
}

createMemberType();

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

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
