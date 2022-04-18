// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    // TITLE
    {
        type: 'input',
        name: 'title',
        message: "Enter the title of the project.",
        validate: answer => {
            if (!answer) {
                return "Enter the title of the project."
            }
            return true
        }
    },
    // DESCRIPTION
    {
        type: 'input',
        name: 'description',
        message: "Enter a description of the project.",
        validate: answer => {
            if (!answer) {
                return "Enter a description of the project."
            }
            return true
        }
    },
    // INSTALLATION
    {
        type: 'input',
        name: 'install',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        validate: answer => {
            if (!answer) {
                return "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
            }
            return true
        }
    },
    // USAGE
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        validate: answer => {
            if (!answer) {
                return "Provide instructions and examples for use. Include screenshots as needed."
            }
            return true
        }
    },
    // LICENSE
    {
        type: 'input',
        name: 'license',
        message: "Enter the license used for this project to let other developers know what they can and cannot do with your project. If you need help choosing a license, refer to https://choosealicense.com.",
        validate: answer => {
            if (!answer) {
                return "Enter the license used for this project to let other developers know what they can and cannot do with your project. If you need help choosing a license, refer to https://choosealicense.com."
            }
            return true
        }
    },
    // CONTRIBUTING
    {
        type: 'input',
        name: 'contribute',
        message: "Include guidelines for how other developers can contribute to this project.",
        validate: answer => {
            if (!answer) {
                return "Include guidelines for how other developers can contribute to this project."
            }
            return true
        }
    },
    // CREDITS
    {
        type: 'input',
        name: 'credit',
        message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
        validate: answer => {
            if (!answer) {
                return "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well."
            }
            return true
        },
    },
    // TESTS
    {
        type: 'input',
        name: 'test',
        message: "Provide examples of how to run tests for the project.",
        validate: answer => {
            if (!answer) {
                return "Provide examples of how to run tests for the project."
            }
            return true
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { title, description, install, usage, license, contribute, credit, test } = questions;
    return inquirer.prompt(`
    # <Your-Project-Title>

    ## Description

    ${data.description}

    ## Table of Contents (Optional)

    If your README is long, add a table of contents to make it easy for users to find what they need.

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation

    ${data.install}

    ## Usage

    ${data.usage}

    To add a screenshot, create an assets / images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    // md
    // ![alt text](assets / images / screenshot.png)
    

    ## Credits

    ${data.credit}

    ## License

    ${data.license}

    ---

    ## Badges

    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

    ## How to Contribute

    ${data.contribute}

    ## Tests

    ${data.tests}
    `);
}

// TODO: Create a function to initialize app
function init() {
    questions.then(data => {
        writeToFile('./README.md', data, err => {
            throw err;
        })
    })
}

// Function call to initialize app
init();
