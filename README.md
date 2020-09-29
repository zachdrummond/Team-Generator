# Team-Generator

## Table of Contents
* [Description](#Description)
* [Links](#Links)
* [Design Elements](#Design-Elements)
* [App Preview](#App-Preview)
* [Credits](#Credits)

## Description
This is a command-line application that generates a software engineering team displayed on an HTML website based on the user's input. Each team member includes a summary, icon, email address, and GitHub profile. Any professional software engineering manager can use this application to proudly showcase the basic information of his/her team.

### *Usage*
1. Enter "node app.js" in your command line.
2. Enter your team's information based on the prompts.
3. Look at the new HTML website that will be created.

## Links
* Video Walkthrough: 
* GitHub Repository: https://github.com/zachdrummond/Team-Generator

## Design Elements
### *JavaScript - Node.js*
* Node Command-Line User Interface
* Unit Tests
* Logical Code Structure
* Modules
* Node Package Manager - Inquirer, Jest
* Classes
* Promises
* Objects
* Arrays
* Methods
* Global and Local Variables
* Functions
* Switch Statements
* Template Literals
* Comments

### *HTML*


## App Preview
### Command-Line Instructions
![CLI](./images/)
### ReadMe
![ReadMe](./images/)

## Credits
* https://nodejs.org/en/
* https://www.npmjs.com/package/inquirer
* https://www.npmjs.com/package/jest


- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

## Instructions

You will build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

* Use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* Your app will run as a Node CLI to gather information about each employee.

* Remember, the styling is completely up to you so try to make it unique.

![Employee Summary 1](./Assets/10-OOP-homework-demo-1.png)
![Employee Summary 2](./Assets/10-OOP-homework-demo-2.png)

### Hints

* You will want to make your methods as pure as possible. This means try to make your methods simple so that they are easier to test.

* The different employee types should all inherit some methods and properties from a base class of `Employee`.

* In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.

## Minimum Requirements

* Functional application.

* GitHub repository with a unique name and a README describing the project.

* User can use the CLI to generate an HTML page that displays information about their team.

* All tests must pass.

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)

## Bonus

* Use validation to ensure that the information provided is in the proper expected format.

* Add the application to your portfolio.


## Submission on BCS

You are required to submit the following:

* The URL of the GitHub repository

* A video demonstrating the entirety of the app's functionality 