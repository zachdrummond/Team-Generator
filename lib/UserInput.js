const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
let counter = 0;

class UserInput {
  constructor() {
    this.roleArray = ["manager", "engineer", "intern"];
    this.questions = [
      "What is your manager's office number?",
      "What is your engineer's GitHub username?",
      "What is your intern's school?",
    ];
  }

  askQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: `What is your ${this.roleArray[counter]}'s name?`,
          default: "No name given.",
        },
        {
          type: "number",
          name: "id",
          message: `What is your ${this.roleArray[counter]}'s id?`,
          default: "No id given.",
        },
        {
          type: "input",
          name: "email",
          message: `What is your ${this.roleArray[counter]}'s email address?`,
          default: "No email address given.",
        },
        {
          type: "input",
          name: "special",
          message: this.questions[counter],
        },
        {
          type: "list",
          name: "teamMember",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "None"],
          default: "None",
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

module.exports = UserInput;
